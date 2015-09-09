
'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$rootScope', '$modal', '$window', 'logoutService','searchByProjectService', 'searchByUserService', function($scope, $rootScope, $modal, $window, logoutService, searchByProjectService, searchByUserService) {

        // disconnect any user on load page
        logoutService.get();

        $rootScope.user = "false";
        $rootScope.currentProject = {};
        $rootScope.currentSlide = {};

        $scope.home = "true";
        $scope.searchViewVisibility = "true";
        $scope.noResults = false;

        $scope.checked = false;

        $scope.searchViewVisibility = true;
        $scope.userOfInterest = {
            username: ""
        };

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
                $window.location.href="/";
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

        $scope.toggleSearchViewVisibility = function(){
            $scope.searchViewVisibility = !$scope.searchViewVisibility;
        };

        $scope.analizeUser = function (username){
            $scope.userOfInterest.username = username;
            $scope.userOfInterest.projects = $scope.searchResults[0].projects;
            $scope.toggleSearchViewVisibility();
        };

        $scope.resetHomePage = function(){
            $scope.userOfInterest.username="";
            $scope.searchViewVisibility = true;
        };


        $scope.resetSearchResults = function(){
            $scope.searchResults = [];
        };

        $scope.resetSearchResults();

        $scope.search = function () {
            $scope.resetSearchResults();

            if ($scope.checked === false) {     //BY USERNAME
                var searchResults = searchByUserService.query({username:$scope.searchText});
                $scope.resetSearchResults();
                searchResults.$promise.then (
                    function(data) {
                        if(data[0] !== undefined) {
                            var result = {};
                            result.username = data[0].username;
                            result.presentationId = data[0].presentationId;
                            result.projectId = data[0].projectId;
                            result.id = data[0].id;
                            result.projects = data[0].projects;
                            $scope.searchResults.push(result);
                            $scope.noResults = false;
                        }
                        else
                            $scope.noResults = true;
                    },
                    function(data) {
                    });
            }

            else if ($scope.checked === true) { // BY PROJECT NAME
                var searchResults = searchByProjectService.query({name:$scope.searchText});
                $scope.resetSearchResults();
                searchResults.$promise.then (
                    function(data) {
                        if (data[0] !== undefined) {

                            for (var i = 0; i < searchResults.length; i++) {

                                var result = {};
                                result.username = data[i].username;

                                result.name = data[i].projects[0].name;
                                result.id = data[i]._id;
                                result.presentationId = data[i].projects[0].presentation._id.$id;
                                result.projectId = data[i].projects[0]._id.$id;

                                result.theme = (data[i].projects[0].presentation.theme !== undefined) ? data[i].projects[0].presentation.theme : "sky";
                                result.transition = (data[i].projects[0].presentation.transition !== undefined) ? data[i].projects[0].presentation.transition : "slide";

                                $scope.searchResults.push(result);
                            }

                            $scope.noResults = false;
                        }
                        else
                            $scope.noResults = true;
                    },
                    function(data) {
                    });
            }
        };

}]);
