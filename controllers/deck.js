app.controller('DeckController', function($rootScope, $scope, dice, decksPreconstruits, pBs, cards){
    var vm =this;
    $scope.decks = [];
    vm.decksPreconstruits = decksPreconstruits;
    vm.state = false;
    vm.onDecksTxt = "Retour à la liste des decks";
    vm.onCardsTxt = "Voir le détail du deck";
    vm.text = vm.onCardsTxt;

    vm.currentDeck = null;

    vm.name = "";
    vm.pB = null;
    vm.cards = [];
    vm.dice = [];

    vm.detail = null;

    vm.typeLoaded = 0;
    vm.cardsCpt = 0;
    vm.diceCpt = 0;

    vm.isExported = false;
    vm.exportJson = "";

    vm.showCards = function() {
        return vm.state;
    }

    vm.change = function(){
        vm.state = !vm.state;
        vm.text = vm.state?vm.onDecksTxt:vm.onCardsTxt;
        if(vm.state)vm.loadDetail("pB",vm.pB);
    }

    /**
        type :
        0 : wip
        1 : construit
        2 : preconstruit
    **/
    vm.loadDeck = function(deck, type){
        vm.typeLoaded = type;
        vm.currentDeck = deck;

        vm.name = deck?deck.name:"";
        vm.pB = findById(pBs,deck.pB);

        vm.cards = [];
        for (var key in deck.cards){
            vm.cards.push({
                number: deck.cards[key],
                card: findById(cards,key),
                first: deck.firstFive.includes(parseInt(key)),
            });
        };
        vm.dice = [];
        for (var key in deck.dice){
            vm.dice.push({
                number: deck.dice[key],
                die: findById(dice,key),
            });
        };

        if(type == 0)vm.calcCpts();
    };

    vm.loadDetail = function(type,elt) {
        if(vm.state)vm.detail = { type: type, elt: elt,};
    };

    vm.isWipEmpty = function() {
        return wipDeck.pB === null && $.isEmptyObject(wipDeck.cards) && $.isEmptyObject(wipDeck.dice);
    };

    vm.cardPlus = function(card) {
        if(card.number < 3 && vm.cardsCpt < 30){
            card.number++;
            wipDeck.cards[card.card.id]++;
            vm.cardsCpt++;
        }
    };
    vm.cardMinus = function(card) {
        if(0 < card.number){
            card.number--;
            wipDeck.cards[card.card.id]--;
            vm.cardsCpt--;
        }
        if(card.number == 0 && card.first){
            vm.cardFive(card);
        }
    };
    vm.cardDelete = function(card) {
        card.number = 0;
        vm.cardFive(card);
        delete wipDeck.cards[card.card.id];
        $rootScope.$broadcast('wipChanged');
    }
    vm.cardFive = function(card) {

        if(card.first){
            var index = wipDeck.firstFive.indexOf(card.card.id);
            if(index != -1) wipDeck.firstFive.splice(index, 1);
            card.first = false;
        } else {
            if(card.number && wipDeck.firstFive.length <5) {
                wipDeck.firstFive.push(card.card.id);
                card.first = true;
            }
        }
    };

    vm.diePlus = function(die) {
        if(vm.diceCpt < 10){
            die.number++;
            wipDeck.dice[die.die.id]++;
            vm.diceCpt++;
        }
    };
    vm.dieMinus = function(die) {
        if(0 < die.number){
            die.number--;
            wipDeck.dice[die.die.id]--;
            vm.diceCpt--;
        }
    };
    vm.dieDelete = function(die) {
        delete wipDeck.dice[die.die.id];
        $rootScope.$broadcast('wipChanged');
    }

    $rootScope.$on('wipChanged', function(event, args){
        vm.loadDeck(wipDeck,0);
    });

    vm.wipIsValid = function() {
        var res = vm.typeLoaded == 0 && vm.pB && vm.cardsCpt == 30 && vm.diceCpt == 10 && wipDeck.firstFive.length == 5 && vm.name;

        return res;
    };

    vm.resetWipDeck = function() {
        wipDeck = {
            id: 0,
            name: "",
            pB: null,
            cards: {},
            dice: {},
            firstFive: [],
        }
        vm.loadFirstDeck();
    };
    vm.deleteDeck = function(deck) {
        var index = $scope.decks.findIndex(function(elt){ return elt.id == deck.id});
        $scope.decks.splice(index, 1);
    };
    vm.save = function() {
        wipDeck.name = vm.name;
        var cardsNotZero = {};
        var diceNotZero = {};
        for( elt in wipDeck.cards){
            if(wipDeck.cards[elt])cardsNotZero[elt] = wipDeck.cards[elt];
        }
        for( elt in wipDeck.dice){
            if(wipDeck.dice[elt])diceNotZero[elt] = wipDeck.dice[elt];
        }
        wipDeck.cards = cardsNotZero;
        wipDeck.dice = diceNotZero;

        if(wipDeck.id){
            $scope.decks[$scope.decks.findIndex(function(elt){ return elt.id == wipDeck.id})] = $.extend(true, {}, wipDeck);
        } else {
            if ( $scope.decks.length == 0){
                wipDeck.id = 1;
            } else {
                wipDeck.id = $scope.decks[$scope.decks.length - 1].id +1;
            }
            $scope.decks.push($.extend(true, {}, wipDeck));
        }
        vm.resetWipDeck();
    };

    vm.copy = function(edit) {
        wipDeck = $.extend(true, {}, vm.currentDeck);
        if(!edit) wipDeck.id = 0;
        vm.loadDeck(wipDeck,0);
    }

    $scope.showContent = function($fileContent){
        $scope.decks = JSON.parse($fileContent);
        vm.loadFirstDeck();
    };

    vm.download = function() {
        $('#download-link').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(angular.toJson($scope.decks)));
    };

    vm.loadFirstDeck = function() {
        if(!vm.isWipEmpty()) {
            vm.loadDeck(wipDeck,0);
        } else if ($scope.decks && $scope.decks.length) {
            vm.loadDeck($scope.decks[$scope.decks.length - 1],1);
        } else {
            vm.loadDeck(decksPreconstruits[decksPreconstruits.length - 1],2);
        }
    }
    vm.wipDeck = function() {
        return wipDeck;
    };
    vm.calcCpts = function() {
        vm.cardsCpt = 0;
        vm.diceCpt = 0;

        for( elt in wipDeck.cards){
            if(wipDeck.cards[elt])vm.cardsCpt += wipDeck.cards[elt];
        }
        for( elt in wipDeck.dice){
            if(wipDeck.dice[elt])vm.diceCpt += wipDeck.dice[elt];
        }
    }

    vm.loadFirstDeck();

});