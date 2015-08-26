
'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$rootScope', '$modal', '$window', 'logoutService','searchByProjectService', 'searchByUserService', function($scope, $rootScope, $modal, $window, logoutService, searchByProjectService, searchByUserService) {

        // disconnect any user on load page
        logoutService.get();

        $rootScope.user = "false";
        $rootScope.currentProject = {};
        $rootScope.currentSlide = {};

        $scope.home = "true";
        $scope.searchViewVisibility="true";

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
                            result.username = searchResults[0].username;
                            result.presentationId = searchResults[0].presentationId;
                            result.projectId=searchResults[0].projectId;
                            result.id = searchResults[0].id;
                            result.projects = searchResults[0].projects;
                            $scope.searchResults.push(result);
                        }else{
                        }
                    },
                    function(data) {
                    });
            }

            else if ($scope.checked === true) { // BY PROJECT NAME
                var searchResults = searchByProjectService.query({name:$scope.searchText});
                $scope.resetSearchResults();
                searchResults.$promise.then (
                    function(data) {

                        for (var i=0; i<searchResults.length; i++) {

                            var result = {};
                            result.username = searchResults[i].username;

                            result.name = searchResults[i].projects[0].name;
                            result.id = searchResults[i]._id;
                            result.presentationId = searchResults[i].projects[0]._id.$id;
                            result.projectId = searchResults[i]._id;

                            result.theme = (searchResults[i].projects[0].theme !== undefined) ? searchResults[i].projects[0].theme !== undefined : "sky";
                            result.transition = (searchResults[i].projects[0].theme !== undefined) ? searchResults[i].projects[0].transition !== undefined : "slide";

                            $scope.searchResults.push(result);
                        }
                    },
                    function(data) {
                    });
            }
        };

}]);
