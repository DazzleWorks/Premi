'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$modal', 'logoutService', function($scope, $modal, logoutService) {

        $scope.home = "true";
        $scope.user = "false";

        $scope.openHome = function () {
            $scope.home = "true";
        };

        $scope.openRestrictedArea = function () {
            $scope.home = "false";
        };

        $scope.login = function () {
            if ($scope.user === "false") {
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/login.html',
                    controller: 'LoginCtrl',
                    windowClass: 'myModal'
                });
                modalInstance.result.then(function (data) {
                    // DA SISTEMARE RETURN DEL BACK-END
                    // $scope.user = data;
                    $scope.user = "true";
                });
            }
        };

        $scope.logout = function () {
            if ($scope.user !== "false") {
                // DA SISTEMARE RETURN DEL BACK-END
                // var user_logout = logoutService.logout();
                var user_logout = "true";
                if (user_logout === "true")
                    $scope.user = "false";
            }
        };

        $scope.signUp = function () {
            if ($scope.user === "false") {
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/signup.html',
                    controller: 'SignupCtrl',
                    windowClass: 'myModal'
                });
                modalInstance.result.then(function (data) {
                    // DA SISTEMARE RETURN DEL BACK-END
                    // $scope.user = data;
                    $scope.user = "true";
                });
            }
        };

        $scope.resetPassword = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/resetPassword.html',
                controller: 'ResetPasswordCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                console.log("reset");
            });
        };

}]);
