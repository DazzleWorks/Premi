angular.module('app.controllers.LoginCtrl', ['ngRoute'])

    .controller('LoginCtrl', ['$scope', '$http', '$modalInstance', 'loginService', function($scope, $http, $modalInstance, loginService) {

        $scope.ok = function () {
            $scope.user = loginService.login();
            $modalInstance.close($scope.user);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
