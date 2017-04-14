app.directive('pb', function() {

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
            pb: '=pb'
        },
        templateUrl: 'templates/pb.html',
        controller: controller,
        controllerAs: 'pbCtrl'
    }
});
