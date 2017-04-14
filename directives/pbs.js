app.directive('pbs', function() {

    var controller = [
        '$rootScope',
        'pbs',
        function($rootScope, pbs){
            this.pbs = pbs;

            this.addToDeck = function(pb){
                $rootScope.$broadcast('wipPbAdded', pb);
            };
        }
    ];

    return {
        restrict: 'E',
        scope: true,
        templateUrl: 'templates/pbs.html',
        controller: controller,
        controllerAs: 'pbsCtrl'
    }
});
