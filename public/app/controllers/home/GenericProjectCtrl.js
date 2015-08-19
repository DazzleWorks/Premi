'use strict';

angular.module('app.controllers.GenericProjectCtrl', ['ngRoute'])

    .controller('GenericProjectCtrl', ['$scope', '$rootScope', '$modal', '$sce', '$window', '$document', function($scope, $rootScope, $modal, $sce, $window, $document) {
        console.log($scope.userOfInterest.projects);

        $rootScope.currentGenericProject = {
            id: "",
            name: "",
            presentation: "",
            firstSlide: "",
            theme:"sky",
            transition:"slide",
            svg:""
            // maxX: 0,
            // maxY: 0
        };

        $scope.adjustSVGViewbox = function(svgString){    //da chiamare anche al resize della pagina
            //1 calcolo dimensione finestra

            //2 trovo larghezza in pixel ed altezza = larghezza*3/4 del ViewBox


            //3 se esiste l'attributo  __ viewBox="0 0 800 600" __ aggiorno le dimensioni, altrimenti lo aggiungo
            var SVGWidth=document.getElementById('presentationFrontSvgContainer').clientWidth;
            var indexBeginWidth = svgString.lastIndexOf("width=\"")+7;
            var indexEndWidth=    svgString.indexOf(" height")-2;
            var indexBeginHeight = svgString.lastIndexOf("height=\"")+8;
            var indexEndHeight=    svgString.indexOf("\" xml:space")-1;
            $scope.originalWidth=svgString.substring(indexBeginWidth,indexEndWidth);
            $scope.originalHeight=svgString.substring(indexBeginHeight,indexEndHeight);
            console.log($scope.originalHeight);
            svgString = svgString.replace("svg","svg viewBox='0 0 "+ $scope.originalWidth +" "+ $scope.originalHeight +" ' width='100%' height='"+ (SVGWidth * 3/4) +"' class='svg-content beige' ");

            /*
            *   PEZZO DA AGGIUNGERE

              width="156px" height="117.064px"
              viewBox="0 0 156 117.064"
              preserveAspectRatio="xMidYMid"


            * */

             return svgString;
        };

         $scope.findProjectById = function(id){
             //console.log($scope.userOfInterest.projects);
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

                    //transtion
                    if($scope.userOfInterest.projects[k].transition !== undefined)
                        obj.transition=$scope.userOfInterest.projects[k].transition;
                    else
                        obj.transition="slide";

                    //svg
                    //console.log(obj.svg=$scope.userOfInterest.projects[k].presentation.slides[0].svg);

                    var svg= $scope.userOfInterest.projects[k].presentation.slides[0].svg;
                    if(svg !== undefined && svg !== "" && svg !== null) {
                        obj.svg = $sce.trustAsHtml($scope.adjustSVGViewbox($scope.userOfInterest.projects[k].presentation.slides[0].svg));
                        $scope.apply;
                    }
                    else
                        obj.svg="";
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
            $rootScope.currentGenericProject.svg = obj.svg;
           // console.log($rootScope.currentGenericProject);
        };
    }]);