angular.module('app.controllers.LoginCtrl', ['ngRoute'])

    .controller('LoginCtrl', ['$scope', '$http', '$modal', '$modalInstance', 'loginService', function($scope, $http, $modal, $modalInstance, loginService) {

        $scope.login_data = {
            username: "",
            password: ""
        };

        $scope.forgotPassword = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/forgotPassword.html',
                controller: 'ForgotPasswordCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                $modalInstance.close();
            });
        };

        $scope.ok = function () {
            //var user = loginService($scope.login_data).login();
            var credentials = {
                username: $scope.login_data.username,
                password: $scope.login_data.password
            };
            var user = loginService.save(credentials);
            user.$promise.then(
                // loginService.login() success
                function(data){
                    $modalInstance.close(data.username);
                },
                // loginService.login() unsuccess
                function(data){
                    $modalInstance.close();
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
