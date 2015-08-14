'use strict';

angular.module('app.controllers.HomePageCtrl', ['ngRoute'])

    .controller('HomePageCtrl', ['$scope', '$rootScope', '$modal', 'logoutService','searchByUserService', function($scope, $rootScope, $modal, logoutService, searchByUserService) {

        // disconnect any user on load page
        logoutService.get();

        $rootScope.user = "false";
        $rootScope.currentProject = {};
        $rootScope.currentSlide = {};

        $scope.home = "true";

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
        /**/





        $scope.searchByUsername=function(){
            $scope.searchResultsByUsers=[];

            $rootScope.$on('searchByUserService', function (e) {
                var searchResults = searchByUserService.query({user:$cope.searchText});

                searchResults.$promise.then (
                    function(data) {
                        console.log("function-success-flag");
                        console.log("OK"+searchResults);
                        $scope.searchResultsByUsers = searchResults;

                    },
                    function(data) {
                        console.log("error"+searchResults);
                        console.log("function-error-flag");

                    });
            });

        };

        $scope.searchResults=[
            {
                name:"prj1",
                id:"id",
                username:"username1"
            },
            {
                name:"prj2",
                id:"id",
                username:"username2"
            },
            {
                name:"prj3",
                id:"id",
                username:"username3"
            },
            {
                name:"prj4",
                id:"id",
                username:"username1"
            },
            {
                name:"prj5",
                id:"id",
                username:"username2"
            },
            {
                name:"prj6",
                id:"id",
                username:"username3"
            },
            {
                name:"prj7",
                id:"id",
                username:"username4"
            },
            {
                name:"prj8",
                id:"id",
                username:"username4"
            },
            {
                name:"prj9",
                id:"id",
                username:"username4"
            },
            {
                name:"prj10",
                id:"id",
                username:"username5"
            },
            {
                name:"prj11",
                id:"id",
                username:"username6"
            }
        ];

        /**/
}]);
