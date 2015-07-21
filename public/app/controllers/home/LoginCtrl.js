angular.module('app.controllers.LoginCtrl', ['ngRoute'])

    .controller('LoginCtrl', ['$scope','$http', '$modalInstance','loginFactory', function($scope, $http, $modalInstance, loginFactory) {

        $scope.login_credentials = {};
        $scope.login_credentials_due = {};

        $scope.ok = function () {

            $scope.login_credentials = loginFactory.login();
            console.log($scope.login_credentials);

            $scope.login_credentials_due = loginFactory.login_due();
            console.log($scope.login_credentials_due);

            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
