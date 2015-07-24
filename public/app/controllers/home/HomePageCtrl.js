'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$modal', function($scope, $modal) {

        $scope.home= "true";
        $scope.restrictedArea= "false";

        $scope.openHome = function () {
            $scope.home= "true";
            $scope.restrictedArea= "false";
        }

        $scope.openRestrictedArea = function () {
            $scope.home= "false";
            $scope.restrictedArea= "true";
        }

        $scope.openLogin = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/login.html',
                controller: 'LoginCtrl'
            });

            modalInstance.result.then(function (text) {
                // INSERIRE FUNZIONE
            });
        }

        $scope.openSignup = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/signup.html',
                controller: 'SignupCtrl'
            });

            modalInstance.result.then(function (text) {
            //     // INSERIRE FUNZIONE
            });
        }

}]);
