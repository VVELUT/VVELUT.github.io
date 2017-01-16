app.controller('DieController', function($rootScope, dice){
    this.dice = dice;

    this.addToDeck = function(die){
        if(!wipDeck.dice[die.id]) wipDeck.dice[die.id] = 0;
        $rootScope.$broadcast('wipChanged');
    };
});