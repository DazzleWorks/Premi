angular.module('app.controllers.MyAccountCtrl', ['ngRoute'])

    .controller('MyAccountCtrl', ['$scope', '$rootScope', 'userService', function($scope, $rootScope, userService) {

        $scope.user_data = {};

        $rootScope.$on('loadUserData', function (e) {
            var user = userService.query({id:$scope.user});
            user.$promise.then (
                function(data) {
                    $scope.user_data = user[0];
                },
                function(data) {
                });
        });

}]);
