'use strict';

angular.module('app.controllers.homePageCtrl', ['ngRoute'])

    .controller('homePageCtrl', ['$scope', '$modal', function($scope, $modal) {

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
                templateUrl: 'app/templates/modalLoginView.html',
                controller: 'modalLoginCtrl'
            });

            modalInstance.result.then(function (text) {
                // INSERIRE FUNZIONE
                console.log("login");
            });
        }

        $scope.openSignup = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/modalSignupView.html',
                controller: 'modalSignupCtrl'
            });

            // modalInstance.result.then(function (text) {
            //     // INSERIRE FUNZIONE
            //     console.log("signup");
            // });
        }

}]);