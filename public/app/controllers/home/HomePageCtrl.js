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
                    console.log(data);
                    $scope.user = data;
                });
            }
        };

        $scope.logout = function () {
            if ($scope.user !== "false") {
                var user_logout = logoutService.logout();
                console.log(user_logout);
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
                    $scope.user = data;
                });
            }
        };

}]);
