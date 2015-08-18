'use strict';

angular.module('app.controllers.GenericProjectCtrl', ['ngRoute'])

    .controller('GenericProjectCtrl', ['$scope', '$rootScope', '$modal', function($scope, $rootScope, $modal) {
        console.log($scope.userOfInterest.projects);

        $rootScope.currentGenericProject = {
            id: "",
            name: "",
            presentation: "",
            firstSlide: "",
            theme:"sky",
            transition:"slide"
            // maxX: 0,
            // maxY: 0
        };



         $scope.findProjectById = function(id){
             console.log($scope.userOfInterest.projects);
            var k;
            var obj = {id: "", name: "", presentation: "",firstSlide: "", theme:"sky", transition:"slide"};
            for (k = 0; k < $scope.userOfInterest.projects.length; ++k) {
                console.log($scope.userOfInterest.projects[k]._id.$id);
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

                    //transtion
                    if($scope.userOfInterest.projects[k].transition !== undefined)
                        obj.transition=$scope.userOfInterest.projects[k].transition;
                    else
                        obj.transition="slide";
                }
            }
            return obj;
        };


        $scope.setCurrentGenericProject= function(id){
            var obj = $scope.findProjectById(id);
            $rootScope.currentGenericProject.id = obj.id;
            $rootScope.currentGenericProject.name = obj.name;
            $rootScope.currentGenericProject.presentation = obj.presentation;
            $rootScope.currentGenericProject.firstSlide = obj.firstSlide;
            $rootScope.currentGenericProject.theme = obj.theme;
            $rootScope.currentGenericProject.transition = obj.transition;

            console.log($rootScope.currentGenericProject);
        };
    }]);