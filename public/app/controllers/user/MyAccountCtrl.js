angular.module('app.controllers.MyAccountCtrl', ['ngRoute'])

    .controller('MyAccountCtrl', ['$scope', 'userService', function($scope, userService) {

        if ($scope.$parent.radioModel = "myAccount")
            $scope.user_data = userService.getDati();

}]);
