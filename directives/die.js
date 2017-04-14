app.directive('die', function() {

    var controller = [
        '$attrs',
        function ($attrs
        ) {
        }
    ];

    return {
        restrict: 'E',
        scope: true,
        bindToController: {
            die: '=die'
        },
        templateUrl: 'templates/die.html',
        controller: controller,
        controllerAs: 'dieCtrl'
    }
});
