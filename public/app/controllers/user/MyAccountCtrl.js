angular.module('app.controllers.MyAccountCtrl', ['ngRoute'])

    .controller('MyAccountCtrl', ['$scope', '$rootScope', 'userService', function($scope, $rootScope, userService) {

        $rootScope.$on('loadUserData', function (e) {
            $scope.user_data = userService.getDati({id:$scope.user});
        });

}]);
