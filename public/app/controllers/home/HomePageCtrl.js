'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$rootScope', '$modal', 'logoutService', function($scope, $rootScope, $modal, logoutService) {

        // disconnect any user on load page
        logoutService.logout();

        $scope.home = "true";
        $scope.user = "false";

        $scope.openHome = function () {
            $scope.home = "true";
        };

        $scope.openRestrictedArea = function () {
            $rootScope.$broadcast('loadUserData');
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
                    if (data !== undefined) {
                        $scope.user = data;
                        $scope.openRestrictedArea();
                    }
                    else
                        $scope.user = "false";
                });
            }
        };

        $scope.logout = function () {
            if ($scope.user !== "false") {
                var user_logout = logoutService.logout();
                $scope.user = "false";
                $scope.openHome();
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
                    if (data !== undefined){
                        $scope.user = data;
                        $scope.openRestrictedArea();
                    }
                    else
                        $scope.user = "false";
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
