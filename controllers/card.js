app.controller('CardController', function($rootScope, cards, tags){
    var vm = this;
    vm.cards = cards;

    vm.allTags = tags;

    vm.tags = {
        type: [1,3,4,5,7,8,43,],
        cost: [9,10,11,12,13,14,15,16,17,58,],
        mecanism: [18,19,24,25,26,27,29,31,35,38,39,40,44,47,51,52,57],
    };
    vm.filters = [];

    vm.areFiltersOpen = false;

    vm.filter = function(reset){
        if(!vm.filters.length)vm.cards = cards;
        else {
            var cardsTmp;
            if(reset){
                cardsTmp = cards;
            } else {
                cardsTmp = vm.cards;
            }
            cardsTmp = cardsTmp.filter(vm.checkTags);
            vm.cards = cardsTmp;
        }
    };

    vm.resetFilters = function(){
        vm.filters = [];
        vm.filter(true);
    }

    vm.checkTags = function(card){
        if(!card.tags)return false;
        return arrayContains(vm.filters, card.tags);
    }

    vm.switchFilter = function(filter){
        var index = vm.filters.indexOf(filter);
        var reset;
        if( index >-1){
            vm.filters.splice(index,1);
            reset = true;
        } else {
            pushSort(filter,vm.filters);
            reset = false;
        }

        vm.filter(reset);
    };
    vm.isSelected = function(filter){
        return vm.filters.indexOf(filter) >-1;
    };

    vm.addToDeck = function(card){
        if(card.linkedPBId === undefined || card.linkedPBId === wipDeck.pB){
            if(!wipDeck.cards[card.id]) wipDeck.cards[card.id] = 0;
            $rootScope.$broadcast('wipChanged');
        }
    };
});