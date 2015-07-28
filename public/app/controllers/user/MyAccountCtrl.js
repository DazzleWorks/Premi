angular.module('app.controllers.MyAccountCtrl', ['ngRoute'])

    .controller('MyAccountCtrl', ['$scope', 'userService', function($scope, userService) {

        $scope.user_data = userService.getDati();
        console.log($scope.user_data);

}]);
