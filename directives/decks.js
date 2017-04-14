app.directive('decks', function() {

    var controller = [
        '$rootScope',
        'dice',
        'decksPreconstruits',
        'pbs',
        'cards',
        function($rootScope, dice, decksPreconstruits, pbs, cards){
            var vm =this;
            vm.decks = [];
            vm.decksPreconstruits = decksPreconstruits;
            vm.state = false;
            vm.onDecksTxt = "Retour à la liste des decks";
            vm.onCardsTxt = "Voir le détail du deck";
            vm.text = vm.onCardsTxt;

            vm.currentDeck = null;

            vm.wipDeck = {
                id: 0,
                name: "",
                pb: null,
                cards: {},
                dice: {},
                firstFive: []
            };

            vm.pb = null;
            vm.cards = [];
            vm.dice = [];

            vm.detail = null;

            vm.typeLoaded = 0;
            vm.cardsCpt = 0;
            vm.diceCpt = 0;

            vm.details = {
                readySpells: 0,
                conjurations: 0,
                allies: 0,
                units: 0,
                alterations: 0,
                tooMuchReady: false
            }

            vm.costs = {
            }

            vm.showCards = function() {
                return vm.state;
            }

            vm.change = function(){
                vm.state = !vm.state;
                vm.text = vm.state?vm.onDecksTxt:vm.onCardsTxt;
                if(vm.state)vm.loadDetail("pb",vm.pb);
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

                vm.pb = findById(pbs,deck.pb);

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
                vm.calcDetails();
            };

            vm.loadDetail = function(type,elt) {
                if(vm.state)vm.detail = { type: type, elt: elt};
            };

            vm.isWipEmpty = function() {
                return vm.wipDeck.pb === null && $.isEmptyObject(vm.wipDeck.cards) && $.isEmptyObject(vm.wipDeck.dice);
            };

            vm.cardPlus = function(card) {
                if(card.number < 3 && vm.cardsCpt < 30){
                    card.number++;
                    vm.wipDeck.cards[card.card.id]++;
                    vm.cardsCpt++;
                }
                vm.calcDetails();
            };
            vm.cardMinus = function(card) {
                if(0 < card.number){
                    card.number--;
                    vm.wipDeck.cards[card.card.id]--;
                    vm.cardsCpt--;
                }
                if(card.number == 0 && card.first){
                    vm.cardFive(card);
                }
                vm.calcDetails();
            };
            vm.cardDelete = function(card) {
                vm.cardsCpt-=card.number;
                card.number = 0;
                vm.cardFive(card);
                delete vm.wipDeck.cards[card.card.id];
                var index = vm.cards.findIndex(function(elt){
                    return elt.card.id == card.card.id;
                });
                vm.cards.splice(index,1);
                vm.calcDetails();
            }
            vm.cardFive = function(card) {
                if(card.first){
                    var index = vm.wipDeck.firstFive.indexOf(card.card.id);
                    if(index != -1) vm.wipDeck.firstFive.splice(index, 1);
                    card.first = false;
                } else {
                    if(card.number && vm.wipDeck.firstFive.length <5) {
                        vm.wipDeck.firstFive.push(card.card.id);
                        card.first = true;
                    }
                }
                vm.calcDetails();
            };

            vm.diePlus = function(die) {
                if(vm.diceCpt < 10){
                    die.number++;
                    vm.wipDeck.dice[die.die.id]++;
                    vm.diceCpt++;
                }
            };
            vm.dieMinus = function(die) {
                if(0 < die.number){
                    die.number--;
                    vm.wipDeck.dice[die.die.id]--;
                    vm.diceCpt--;
                }
            };
            vm.dieDelete = function(die) {
                vm.diceCpt-= die.number;
                delete vm.wipDeck.dice[die.die.id];
                var index = vm.dice.findIndex(function(elt){
                    return elt.die.id == die.die.id;
                });
                vm.dice.splice(index,1);
            }

            $rootScope.$on('wipPbAdded', function(event, pb){
                if(vm.wipDeck.pb){
                    if(vm.wipDeck.pb == pb.id) return;
                    var old = findById(pbs,vm.wipDeck.pb);
                    delete vm.wipDeck.cards[old.linkedCardId];
                }

                vm.wipDeck.pb = pb.id;
                vm.wipDeck.cards[pb.linkedCardId] = 0;
                vm.loadDeck(vm.wipDeck,0);
            });
            $rootScope.$on('wipCardAdded', function(event, card){
                if(card.linkedPbId === undefined || card.linkedPbId === vm.wipDeck.pb){
                    if(!vm.wipDeck.cards[card.id]) vm.wipDeck.cards[card.id] = 0;
                }
                vm.loadDeck(vm.wipDeck,0);
            });
            $rootScope.$on('wipDiceAdded', function(event, die){
                if(!vm.wipDeck.dice[die.id]) vm.wipDeck.dice[die.id] = 0;
                vm.loadDeck(vm.wipDeck,0);
            });

            vm.wipIsValid = function() {
                var res = vm.typeLoaded == 0 && vm.pb && vm.cardsCpt == 30 && vm.diceCpt == 10 && vm.wipDeck.firstFive.length == 5 && vm.wipDeck.name;
                return res;
            };

            vm.resetWipDeck = function() {
                vm.wipDeck = {
                    id: 0,
                    name: "",
                    pb: null,
                    cards: {},
                    dice: {},
                    firstFive: [],
                }
                vm.loadFirstDeck();
            };
            vm.deleteDeck = function(deck) {
                var index = vm.decks.findIndex(function(elt){ return elt.id == deck.id});
                vm.decks.splice(index, 1);
                vm.loadFirstDeck();
            };
            vm.save = function() {
                var cardsNotZero = {};
                var diceNotZero = {};
                for( elt in vm.wipDeck.cards){
                    if(vm.wipDeck.cards[elt])cardsNotZero[elt] = vm.wipDeck.cards[elt];
                }
                for( elt in vm.wipDeck.dice){
                    if(vm.wipDeck.dice[elt])diceNotZero[elt] = vm.wipDeck.dice[elt];
                }
                vm.wipDeck.cards = cardsNotZero;
                vm.wipDeck.dice = diceNotZero;

                if(vm.wipDeck.id){
                    vm.decks[vm.decks.findIndex(function(elt){ return elt.id == vm.wipDeck.id})] = $.extend(true, {}, vm.wipDeck);
                } else {
                    if ( vm.decks.length == 0){
                        vm.wipDeck.id = 1;
                    } else {
                        vm.wipDeck.id = vm.decks[vm.decks.length - 1].id +1;
                    }
                    vm.decks.push($.extend(true, {}, vm.wipDeck));
                }
                vm.resetWipDeck();
            };

            vm.copy = function(edit) {
                vm.wipDeck = $.extend(true, {}, vm.currentDeck);
                if(!edit) vm.wipDeck.id = 0;
                vm.loadDeck(vm.wipDeck,0);
            }

            vm.showContent = function($fileContent){
                vm.decks = JSON.parse($fileContent);
                vm.loadFirstDeck();
            };

            vm.download = function() {
                $('#download-link').attr('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(angular.toJson(vm.decks)));
            };

            vm.loadFirstDeck = function() {
                if(!vm.isWipEmpty()) {
                    vm.loadDeck(vm.wipDeck,0);
                } else if (vm.decks && vm.decks.length) {
                    vm.loadDeck(vm.decks[vm.decks.length - 1],1);
                } else {
                    vm.loadDeck(decksPreconstruits[decksPreconstruits.length - 1],2);
                }
            }

            vm.calcCpts = function() {
                vm.cardsCpt = 0;
                vm.diceCpt = 0;

                for( elt in vm.wipDeck.cards){
                    if(vm.wipDeck.cards[elt])vm.cardsCpt += vm.wipDeck.cards[elt];
                }
                for( elt in vm.wipDeck.dice){
                    if(vm.wipDeck.dice[elt])vm.diceCpt += vm.wipDeck.dice[elt];
                }
            }

            vm.calcDetails = function() {
                vm.details = {
                    readySpells: 0,
                    conjurations: 0,
                    allies: 0,
                    units: 0,
                    alterations: 0,
                    tooMuchReady: false
                }

                vm.costs = {};

                if(vm.pb){
                    if(vm.pb.costs) {
                        for(key in vm.pb.costs){
                            vm.addCost(key);
                            vm.costs[key]["effectCost"]+= vm.pb.costs[key];
                            vm.costs[key]["FFEffectCost"]+= vm.pb.costs[key];
                        }
                    }

                    if(vm.pb.invocation) {
                        if(vm.pb.invocation.type == "Sort d'altération invoqué") {
                            vm.details.alterations += vm.pb.invocation.number;
                        } else if (vm.pb.invocation.type == "Invocation") {
                            vm.details.conjurations += vm.pb.invocation.number;
                        }
                    }
                }
                vm.cards.forEach(function(elt) {
                    if(elt.number) {
                        switch (elt.card.type) {
                            case "Allié":
                            vm.details.allies += elt.number;
                            break;
                            case "Sort préparatoire":
                            vm.details.readySpells += 1;
                            break;
                            case "Sort d'altération":
                            vm.details.alterations += elt.number;
                            break;
                        }

                        if(elt.card.invocation) {
                            if(elt.card.invocation.type == "Sort d'altération invoqué") {
                                vm.details.alterations += elt.card.invocation.number;
                            } else if (elt.card.invocation.type == "Invocation") {
                                vm.details.conjurations += elt.card.invocation.number;
                            }
                        }

                        if(elt.card.costs) {
                            if(elt.card.costs.playCost){
                                for(key in elt.card.costs.playCost){
                                    vm.addCost(key);
                                    vm.costs[key]["playCost"]+= elt.card.costs.playCost[key] * elt.number;
                                    if(elt.first){
                                        vm.costs[key]["FFPlayCost"]+= elt.card.costs.playCost[key];
                                    }
                                }
                            }
                            if(elt.card.costs.effectCost){
                                for(key in elt.card.costs.effectCost){
                                    vm.addCost(key);
                                    vm.costs[key]["effectCost"]+= elt.card.costs.effectCost[key] * elt.number;
                                    if(elt.first) {
                                        vm.costs[key]["FFEffectCost"]+= elt.card.costs.effectCost[key];
                                    }
                                }
                            }
                        }
                    }
                });

                vm.details.units = vm.details.conjurations + vm.details.allies;
                vm.details.tooMuchReady = vm.details.readySpells > (vm.pb?vm.pb.spellbook:0);
            }

            vm.addCost = function(key) {
                if(!vm.costs[key]) {
                    if(key.length == 2){
                        key = key[1];
                        vm.costs['P'+key] = {'symbol': '%P'+key+'%','playCost': 0,'effectCost': 0,'FFPlayCost': 0,'FFEffectCost': 0};
                        vm.costs['C'+key] = {'symbol': '%C'+key+'%','playCost': 0,'effectCost': 0,'FFPlayCost': 0,'FFEffectCost': 0};
                    } else {
                        vm.costs[key] = {'symbol': '%'+key+'%','playCost': 0,'effectCost': 0,'FFPlayCost': 0,'FFEffectCost': 0};
                    }
                }
            }

            vm.loadFirstDeck();
        }
    ];

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'templates/decks.html',
        controller: controller,
        controllerAs: 'decksCtrl'
    }
});
