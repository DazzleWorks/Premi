'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$rootScope', '$modal', 'logoutService','searchByUserService', function($scope, $rootScope, $modal, logoutService, searchByUserService) {

        // disconnect any user on load page
        logoutService.get();

        $rootScope.user = "false";
        $rootScope.currentProject = {};
        $rootScope.currentSlide = {};

        $scope.home = "true";

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

        $scope.search = function () {
            if ($scope.checked === false) {
                var searchResults = searchByUserService.query({username:$scope.searchText});
                searchResults.$promise.then (
                    function(data) {
                        console.log(data);
                        $scope.searchResults.byProjectName = [];
                        $scope.searchResults.byUsername = [];
                        if(data[0] !== undefined) {
                            $scope.searchResults.byUsername = searchResults[0].username;
                            $scope.formatResults(searchResults[0]);
                            console.log(searchResults[0].username);
                        }

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

        $scope.searchResults ={
            byUsername:[
                {username:"a"},
                {username:"b"},
                {username:"c"},
                {username:"d"},
                {username:"e"},
                {username:"f"}
            ],
            byProjectName:[
                {
                    name:"prj1",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username1"
                },
                {
                    name:"prj2",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username2"
                },
                {
                    name:"prj3",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username3"
                },
                {
                    name:"prj4",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username1"
                },
                {
                    name:"prj5",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username2"
                },
                {
                    name:"prj6",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username3"
                },
                {
                    name:"prj7",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username4"
                },
                {
                    name:"prj8",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username4"
                },
                {
                    name:"prj9",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username4"
                },
                {
                    name:"prj10",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username5"
                },
                {
                    name:"prj11",
                    id:"55cc87eeedee62610c8b4591",
                    username:"username6"
                }
             ]
    };

}]);
