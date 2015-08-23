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
 * |  1.0.0  | 2015-07-3  |  Ros Fabio    | setCurrentGenericProject()           | add Feature                  |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 * |  0.1.0  | 2015-07-5  |  Ros Fabio    | adjustSVGViewbox(), findProjectById()| create class                 |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 * |  1.0.0  | 2015-07-5  | Carraro Nicola| Angular.bind('resize')               | add Feature                  |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 */
'use strict';

angular.module('app.controllers.GenericProjectCtrl', ['ngRoute'])

    .controller('GenericProjectCtrl', ['$scope', '$rootScope', '$modal', '$sce', '$window', '$document', function($scope, $rootScope, $modal, $sce, $window, $document) {
       // console.log($scope.userOfInterest.projects);


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

        /**
         * calculate the right size for SVG using the window size
         * @param: $scope.currentGenericProject
         * @param: $window, angular variable for get window size informations
         * @param: svgString, contains she SVG entirecode
         * @return: new SVG string
         */
        $scope.adjustSVGViewbox = function(svgString){    //da chiamare anche al resize della pagina
            //1 calcolo dimensione finestra

            //2 trovo larghezza in pixel ed altezza = larghezza*3/4 del ViewBox


            //3 se esiste l'attributo  __ viewBox="0 0 800 600" __ aggiorno le dimensioni, altrimenti lo aggiungo
            $scope.SVGWidth=document.getElementById('presentationFrontSvgContainer').clientWidth;
            var indexBeginWidth = svgString.lastIndexOf("width=\"")+7;
            var indexEndWidth=    svgString.indexOf(" height")-2;
            var indexBeginHeight = svgString.lastIndexOf("height=\"")+8;
            var indexEndHeight=    svgString.indexOf("\" xml:space")-1;
            $scope.originalWidth=svgString.substring(indexBeginWidth,indexEndWidth);
            $scope.originalHeight=svgString.substring(indexBeginHeight,indexEndHeight);
            svgString = svgString.replace("svg","svg viewBox='0 0 "+ $scope.originalWidth +" "+ $scope.originalHeight +" ' width='100%' height='"+ ($scope.SVGWidth * 3/4) +"' class='svg-content "+ $rootScope.currentGenericProject.theme +"' ");

            //console.log( $scope.originalHeight);
            /*
            *   PEZZO DA AGGIUNGERE

              width="156px" height="117.064px"
              viewBox="0 0 156 117.064"
              preserveAspectRatio="xMidYMid"


            * */

             return svgString;
        };

        /**
         * call this function on window resize
         * @param: $scope.currentGenericProject
         * @param: $scope.SVGWidth
         * @param: $window, angular variable for get window size informations
         * @return: new SVG string
         */

        angular.element($window).bind('resize', function () {   //non va
                $scope.SVGWidth=document.getElementById('presentationFrontSvgContainer').clientWidth;
                var indexBeginHeight = $rootScope.currentGenericProject.svg.toString().lastIndexOf("height=\"")+8;
                var indexEndHeight=    $rootScope.currentGenericProject.svg.toString().indexOf("\" xml:space")-1;
                var oldHeight=$rootScope.currentGenericProject.svg.toString().substring(indexBeginHeight,indexEndHeight);
                //console.log(/*$rootScope.currentGenericProject.svg.toString().replace(oldHeight, $scope.SVGWidth *3/4)*/$scope.SVGWidth *3/4);
                var placeholder=$rootScope.currentGenericProject.svg;
                $rootScope.currentGenericProject.svg="";
                $rootScope.currentGenericProject.svg=placeholder.toString().replace(oldHeight.toString(), $scope.SVGWidth *3/4);
                console.log(oldHeight);
                $scope.apply;
        });

        /**
         * returns entire project from id
         * @param: id - the project id
         * @return: the entire project in a json object or null
         */
         $scope.findProjectById = function(id){
             //console.log($scope.userOfInterest.projects);

            var k;
            var obj = {id: "", name: "", presentation: "",firstSlide: "", theme:"sky", transition:"slide", username:""};
            for (k = 0; k < $scope.userOfInterest.projects.length; ++k) {
                if($scope.userOfInterest.projects[k]._id.$id === id) {
                    console.log($scope.userOfInterest.projects[k]);
                    obj.id=$scope.userOfInterest.projects[k]._id.$id;
                    obj.name=$scope.userOfInterest.projects[k].name;
                    obj.presentation=$scope.userOfInterest.projects[k].presentation;
                    obj.presentationId=$scope.userOfInterest.projects[k].presentation._id.$id;
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
                    //console.log(obj.svg=$scope.userOfInterest.projects[k].presentation.slides[0].svg);

                    var svg= $scope.userOfInterest.projects[k].presentation.slides[0].svg;
                    if(svg !== undefined && svg !== "" && svg !== null) {
                        obj.svg = $sce.trustAsHtml($scope.adjustSVGViewbox($scope.userOfInterest.projects[k].presentation.slides[0].svg));
                        //$scope.apply;
                    }
                    else
                        obj.svg="";


                    obj.username=$scope.userOfInterest.username;

                    $scope.apply;
                }
            }
            return obj;
        };
        /**
         * set current project from id and refresh view
         * @param: id - the project id
         * @return: void
         */
        $scope.setCurrentGenericProject = function(id){
            var obj = $scope.findProjectById(id);
            $rootScope.currentGenericProject.id = obj.id;
            $rootScope.currentGenericProject.name = obj.name;
            $rootScope.currentGenericProject.presentation = obj.presentation;
            $rootScope.currentGenericProject.firstSlide = obj.firstSlide;
            $rootScope.currentGenericProject.theme = obj.theme;
            $rootScope.currentGenericProject.transition = obj.transition;


            $rootScope.currentGenericProject.username = obj.username;
            $rootScope.currentGenericProject.svg = obj.svg;

            $rootScope.currentGenericProject.presentationId = obj.presentationId;


           // console.log(obj);
            $scope.apply;
        };
    }]);
