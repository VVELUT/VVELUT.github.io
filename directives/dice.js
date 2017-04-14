app.directive('dice', function() {

    var controller = [
        '$rootScope',
        'dice',
        function($rootScope, dice){
            this.dice = dice;

            this.addToDeck = function(die){
                $rootScope.$broadcast('wipDiceAdded', die);
            };
        }
    ];

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'templates/dice.html',
        controller: controller,
        controllerAs: 'diceCtrl'
    }
});
