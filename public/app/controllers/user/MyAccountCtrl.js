angular.module('app.controllers.MyAccountCtrl', ['ngRoute'])

    .controller('MyAccountCtrl', ['$scope', 'userService', function($scope, userService) {

        if ($scope.radioModel === "myAccount")
            $scope.user_data = userService.getDati({id:$scope.user});

}]);
