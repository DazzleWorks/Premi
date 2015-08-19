'use strict';

angular.module('app.controllers.GenericProjectCtrl', ['ngRoute'])

    .controller('GenericProjectCtrl', ['$scope', '$rootScope', '$modal', function($scope, $rootScope, $modal) {
        $rootScope.currentGenericProject = {
            id: "",
            name: "",
            presentation: "",
            firstSlide: "",
            theme:"sky",
            transition:"none",
            svg:""
            // maxX: 0,
            // maxY: 0
        };

        $scope.findProjectById = function(id){
            var k;
            var obj = {id: "", name: "", presentation: "",firstSlide: "", theme:"sky", transition:"slide"};
            for (k = 0; k < $scope.userOfInterest.projects.length; ++k) {
                if($scope.userOfInterest.projects[k]._id.$id === id) {

                    obj.id=$scope.userOfInterest.projects[k]._id.$id;
                    obj.name=$scope.userOfInterest.projects[k].name;
                    obj.presentation=$scope.userOfInterest.projects[k].presentation;
                    obj.firstSlide=$scope.userOfInterest.projects[k].firstSlide;

                    //theme
                    if($scope.userOfInterest.projects[k].theme !== undefined)
                        obj.theme=$scope.userOfInterest.projects[k].theme;
                    else
                        obj.theme="sky";

                    //transition
                    if($scope.userOfInterest.projects[k].transition !== undefined)
                        obj.transition=$scope.userOfInterest.projects[k].transition;
                    else
                        obj.transition="slide";

                    //svg
                    if($scope.userOfInterest.projects[k].svg !== undefined)
                        obj.svg=$scope.userOfInterest.projects[k].svg;
                    else
                        obj.svg="";
                }
            }
            return obj;
        };

        $scope.setCurrentGenericProject = function(id){
            var obj = $scope.findProjectById(id);
            $rootScope.currentGenericProject.id = obj.id;
            $rootScope.currentGenericProject.name = obj.name;
            $rootScope.currentGenericProject.presentation = obj.presentation;
            $rootScope.currentGenericProject.firstSlide = obj.firstSlide;
            $rootScope.currentGenericProject.theme = obj.theme;
            $rootScope.currentGenericProject.transition = obj.transition;
        };
    }]);
