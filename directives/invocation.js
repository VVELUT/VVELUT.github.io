app.directive('invocation', function() {

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
            invocation: '=invocation'
        },
        templateUrl: 'templates/invocation.html',
        controller: controller,
        controllerAs: 'invocationCtrl'
    }
});
