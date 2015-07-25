angular.module('app.controllers.LoginCtrl', ['ngRoute'])

    .controller('LoginCtrl', ['$scope', '$http', '$modalInstance', 'loginService', function($scope, $http, $modalInstance, loginService) {

        $scope.login_data = {
            username: "",
            password: ""
        };

        $scope.ok = function () {
            var user = loginService($scope.login_data).login();
            $modalInstance.close(user);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
