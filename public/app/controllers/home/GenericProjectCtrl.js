/**
 * @file: public/app/controllers/home/GenericProjectCtrl.js
 * @author: DazzleWorks
 * @date: 2015-07-5
 * @description: Controller for progect retrive and visualization
 *
 * +---------+------------+---------------+---------------------------------------------------------------------+
 * | Version |     Date   |  Programmer   |   Modify                             | Description                  |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 * |  1.0.0  | 2015-07-1  | Carraro Nicola| $rootScope.currentGenericProject     | create class                 |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 * |  1.0.0  | 2015-07-3  | Ros Fabio     | setCurrentGenericProject()           | add Feature                  |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 * |  0.1.0  | 2015-07-5  | Ros Fabio     | adjustSVGViewbox(), findProjectById()| create class                 |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 * |  1.0.0  | 2015-07-5  | Carraro Nicola| Angular.bind('resize')               | add Feature                  |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 */
'use strict';

angular.module('app.controllers.GenericProjectCtrl', ['ngRoute'])

    .controller('GenericProjectCtrl', ['$scope', '$rootScope', '$modal', '$sce', '$window', '$document', function($scope, $rootScope, $modal, $sce, $window, $document) {

        $rootScope.currentGenericProject = {
            id: '',
            name: '',
            presentation: '',
            firstSlide: '',
            theme: 'sky',
            transition: 'none',
            svg: ''
        };

        /**
         * calculate the right size for SVG using the window size
         * @param: $scope.currentGenericProject
         * @param: $window, angular variable for get window size informations
         * @param: svgString, contains she SVG entirecode
         * @return: new SVG string
         */

        $scope.adjustSVGViewbox = function(svgString){    //da chiamare anche al resize della pagina
            // 1) find window's size
            // 2) set newWidth = SVGWidth * x / y
            // 3) replace the old size with the new size --> viewBox = "0 0 width height"

            var svgBoxWidth = document.getElementById('presentationFrontSvgContainer').offsetWidth;

            var originalWidth = $(svgString).attr("width");
            var originalHeight = $(svgString).attr("height");

            var parser = new DOMParser();
            var doc = parser.parseFromString(svgString, "image/svg+xml");

            doc.firstChild.setAttribute('width', svgBoxWidth);
            doc.firstChild.setAttribute('height', (svgBoxWidth * 2 / 3));
            doc.firstChild.setAttribute('class', $rootScope.currentGenericProject.theme);

            var svgString = doc.firstChild.outerHTML;

            return svgString;
        };

        /**
         * call this function on window resize
         * @param: $scope.currentGenericProject
         * @param: $scope.SVGWidth
         * @param: $window, angular variable for get window size informations
         * @return: new SVG string
         */

        angular.element($window).bind('resize', function () {
            var svgBoxWidth = document.getElementById('presentationFrontSvgContainer').offsetWidth;
            document.getElementById('presentationFrontSvgContainer').getElementsByTagName('svg')[0].setAttribute('width', svgBoxWidth);
            document.getElementById('presentationFrontSvgContainer').getElementsByTagName('svg')[0].setAttribute('height', svgBoxWidth * 2 / 3);
        });

        /**
         * returns entire project from id
         * @param: id - the project id
         * @return: the entire project in a json object or null
         */

        $scope.findProjectById = function(id) {

            var prj = {
                username: '',
                id: '',
                name: '',
                presentation: '',
                firstSlide: '',
                theme: '',
                transition: ''
            };

            for (var obj in $scope.userOfInterest.projects) {
                console.log($scope.userOfInterest.projects[obj]);
                if($scope.userOfInterest.projects[obj]._id.$id === id) {
                    prj.id = $scope.userOfInterest.projects[obj]._id.$id;
                    prj.name = $scope.userOfInterest.projects[obj].name;
                    prj.presentation = $scope.userOfInterest.projects[obj].presentation;
                    prj.presentationId = $scope.userOfInterest.projects[obj].presentation._id.$id;
                    prj.firstSlide = $scope.userOfInterest.projects[obj].firstSlide;

                    // theme
                    if($scope.userOfInterest.projects[obj].presentation.theme !== undefined)
                        prj.theme = $scope.userOfInterest.projects[obj].presentation.theme;
                    else
                        prj.theme = "sky";

                    // transition
                    if($scope.userOfInterest.projects[obj].presentation.transition !== undefined)
                        prj.transition = $scope.userOfInterest.projects[obj].presentation.transition;
                    else
                        prj.transition = "slide";

                    // svg
                    var svg = $scope.userOfInterest.projects[obj].presentation.slides[0].svg;
                    if(svg !== undefined && svg !== "" && svg !== null) {
                        prj.svg = $sce.trustAsHtml($scope.adjustSVGViewbox($scope.userOfInterest.projects[obj].presentation.slides[0].svg));
                    }
                    else
                        prj.svg="";

                    prj.username = $scope.userOfInterest.username;
                }
            }
            return prj;
        };


        /**
         * set current project from id and refresh view
         * @param: id - the project id
         * @return: void
         */

        $scope.setCurrentGenericProject = function(id){
            var obj = $scope.findProjectById(id);

            $rootScope.currentGenericProject.username = obj.username;

            $rootScope.currentGenericProject.id = obj.id;
            $rootScope.currentGenericProject.name = obj.name;
            $rootScope.currentGenericProject.presentation = obj.presentation;
            $rootScope.currentGenericProject.presentationId = obj.presentationId;
            $rootScope.currentGenericProject.firstSlide = obj.firstSlide;
            $rootScope.currentGenericProject.theme = obj.theme;
            $rootScope.currentGenericProject.transition = obj.transition;

            $rootScope.currentGenericProject.svg = obj.svg;
        };
    }]);
