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

        $scope.searchViewVisibility = true;
        $scope.userOfInterest={
            username:""
        };



        $scope.toggleSearchViewVisibility = function(){
            $scope.searchViewVisibility = !$scope.searchViewVisibility;
        };

        $scope.analizeUser = function (username){
            $scope.userOfInterest.username=username;
            $scope.userOfInterest.projects=$scope.searchResults[0].projects;

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
                searchResults.$promise.then (
                    function(data) {
                        // $scope.searchResults.byProjectName = [];
                        // $scope.searchResults.byUsername = [];
                        if(data[0] !== undefined) {
                            var result = {};
                            result.username = searchResults[0].username;
                            result.id = searchResults[0].id;
                            result.projects = searchResults[0].projects;
                            $scope.resetSearchResults();
                            $scope.searchResults.push(result);
                        }else{
                        }
                    },
                    function(data) {
                    });
            }
            else if ($scope.checked === true) { // BY PROJECT NAME
                //var searchResults =null;
                //if($scope.searchText !== "" || $scope.searchText !== undefined ) {
                    var searchResults = searchByProjectService.query({name:$scope.searchText});
                //}
                searchResults.$promise.then (
                    function(data) {
                        //console.log(data);

                        $scope.resetSearchResults();

                        for (var i=0; i<searchResults.length; i++) {

                            var result = {};
                            result.name = searchResults[i].projects[0].name;
                            result.id = searchResults[i].id;
                            result.username = searchResults[i].projects[0].username;
                            result.projectId = searchResults[i]._id;
                            result.theme = (searchResults[i].projects[0].theme !== undefined) ? searchResults[i].projects[0].theme !== undefined : "sky";
                            result.transition = (searchResults[i].projects[0].theme !== undefined) ? searchResults[i].projects[0].transition !== undefined : "slide";
                        }
                     },
                    function(data) {
                    });
            }
        };

}]);
