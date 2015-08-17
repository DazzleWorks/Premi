'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$rootScope', '$modal', 'logoutService','searchByUserService', function($scope, $rootScope, $modal, logoutService, searchByUserService) {

        // disconnect any user on load page
        logoutService.get();

        $rootScope.user = "false";
        $rootScope.currentProject = {};
        $rootScope.currentSlide = {};

        $scope.home = "true";
        $scope.searchViewVisibility="true";

        $scope.checked = false;

        $scope.openHome = function () {
            $scope.home = "true";
        };

        $scope.openRestrictedArea = function () {
            if ($rootScope.user !== "false")
                $rootScope.$broadcast('loadUserData');
            $scope.home = "false";
        };

        $scope.login = function () {
            if ($rootScope.user === "false") {
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/login.html',
                    controller: 'LoginCtrl',
                    windowClass: 'myModal'
                });
                modalInstance.result.then(function (data) {
                    if (data !== undefined) {
                        $rootScope.user = data;
                        $scope.openRestrictedArea();
                    }
                    else
                        $rootScope.user = "false";
                });
            }
        };

        $scope.logout = function () {
            if ($rootScope.user !== "false") {
                var user_logout = logoutService.get();
                $rootScope.user = "false";
                $scope.openHome();
            }
        };

        $scope.signUp = function () {
            if ($rootScope.user === "false") {
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/signup.html',
                    controller: 'SignupCtrl',
                    windowClass: 'myModal'
                });
                modalInstance.result.then(function (data) {
                    if (data !== undefined){
                        $rootScope.user = data;
                        $scope.openRestrictedArea();
                    }
                    else
                        $rootScope.user = "false";
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

        $scope.formatResults = function (results){
            $scope.searchResults.byUsername =[];
            $scope.searchResults.byUsername.push({username:results.username});
        };

        $scope.searchViewVisibility = true;
        $scope.userOfInterest={
            username:""
        };

        $scope.toggleSearchViewVisibility = function(){
            $scope.searchViewVisibility = !$scope.searchViewVisibility;
        };

        $scope.analizeUser = function (username){
            $scope.userOfInterest.username=username;
            $scope.toggleSearchViewVisibility();

        };



        $scope.searchResults = [];

        $scope.search = function () {
            if ($scope.checked === false) {
                var searchResults = searchByUserService.query({username:$scope.searchText});
                console.log(searchResults[0]);
                searchResults.$promise.then (
                    function(data) {
                        // $scope.searchResults.byProjectName = [];
                        // $scope.searchResults.byUsername = [];
                        if(data[0] !== undefined) {
                            var result = {};
                            result.username = searchResults[0].username;
                            result.id = searchResults[0].id;
                            result.projects = searchResults[0].projects;
                            $scope.searchResults.push(result);
                        }
                        console.log($scope.searchResults);
                    },
                    function(data) {
                    });
            }
            else if ($scope.checked === true) {
                var searchResults = searchByProjectService.get({project:$scope.searchText});
                searchResults.$promise.then (
                    function(data) {
                        console.log(data);
                        $scope.searchResults.byProjectName = searchResults;
                        $scope.searchResults.byUsername = [];
                    },
                    function(data) {
                    });
            }
        };

}]);
