app.directive('cards', function() {

    var controller = [
        '$rootScope',
        'cards',
        'tags',
        function($rootScope, cards, tags){
            var vm = this;
            vm.cards = cards;

            vm.allTags = tags;

            vm.tags = {
                type: [1,3,4,5,7,8,43],
                cost: [9,10,11,12,62,63,14,15,16,17,58],
                mecanism: [19,24,25,26,27,29,31,35,38,39,40,47,57]
            };
            vm.filters = {
                included: [],
                excluded: []
            };

            vm.areFiltersOpen = false;

            vm.resetFilters = function(){
                vm.filters = {
                    included: [],
                    excluded: []
                };
            }

            vm.checkTags = function(card){
                if(!card.tags)return false;
                return arrayContains(vm.filters.included, card.tags) && arrayDiffers(vm.filters.excluded, card.tags);
            }

            vm.switchFilter = function(filter){
                var includedIndex = vm.filters.included.indexOf(filter);
                var excludedIndex = vm.filters.excluded.indexOf(filter);

                if(includedIndex == -1 && excludedIndex == -1) {
                    pushSort(filter,vm.filters.included);
                } else if (excludedIndex == -1) {
                    vm.filters.included.splice(includedIndex,1);
                    pushSort(filter,vm.filters.excluded);
                } else {
                    vm.filters.excluded.splice(excludedIndex,1);
                }
            };
            vm.tagStatus = function(filter){
                if(vm.filters.included.indexOf(filter) >-1) return "included";
                if(vm.filters.excluded.indexOf(filter) >-1) return "excluded";
                return "";
            };

            vm.addToDeck = function(card){
                $rootScope.$broadcast('wipCardAdded',card);
            };

            vm.countTags = function(){
                var tagsCount = {};
                var tagsCount = {};
                vm.cards.forEach(function(card) {
                    card.tags.forEach(function(tag) {
                        if(tagsCount[tag]){
                            tagsCount[tag].cpt+=1;
                        } else {
                            tagsCount[tag] = {
                                "cpt": 1,
                                "name": vm.allTags[tag]
                            };
                        }
                    });
                });

                for(tag in tagsCount){
                    console.log(""+tag+":"+tagsCount[tag].name+"("+tagsCount[tag].cpt+")")
                }
            }
            // vm.countTags();

        }
    ];

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'templates/cards.html',
        controller: controller,
        controllerAs: 'cardsCtrl'
    }
});
