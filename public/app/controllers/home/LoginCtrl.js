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
            var user = loginService.save($scope.login_data);
            user.$promise.then(
                // loginService.login() success
                function(data){
                    if (data.username !== undefined)
                        $modalInstance.close(data.username);
                    else
                        $scope.error = 'Credenziali errate'
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
