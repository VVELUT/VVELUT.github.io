app.controller('PBController', function($rootScope, pBs){
    this.pBs = pBs;

    this.addToDeck = function(pB){
        if(wipDeck.pB){
            if(wipDeck.pB == pB.id) return;
            var old = findById(pBs,wipDeck.pB);
            delete wipDeck.cards[old.linkedCardId];
        }

        wipDeck.pB = pB.id;
        wipDeck.cards[pB.linkedCardId] = 0;

        $rootScope.$broadcast('wipChanged');
    };
});