app.directive('card', function() {

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
            card: '=card'
        },
        templateUrl: 'templates/card.html',
        controller: controller,
        controllerAs: 'cardCtrl'
    }
});
