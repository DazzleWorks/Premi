angular.module('app.controllers.SlideEditorCtrl', ['ngRoute', 'gridster'])

    .controller('SlideEditorCtrl', ['$scope', '$rootScope', '$sce', '$modal',
     '$window', '$tour', 'indexService', 'presentationService', 'presentationDataService', 'slideService',
     function($scope, $rootScope, $sce, $modal, $window, $tour, indexService, presentationService, presentationDataService, slideService) {

// ----- INITIALIZATION TOUR -----
        $scope.startTour = $tour.start;



// ----- VARIABLES & INITIALIZATION -----
        $scope.currentSlide = '';
        $scope.GridsterSlidesSVG = [];

        var localData = {
            currentX: 1,
            currentY: 1
        };

        $scope.maxX=1;

        $scope.components = [
            {label: "Text", id: "editText", classes: "fa fa-font"},
            {label: "Image", id: "editImage", classes: "fa fa-camera-retro"},
            {label: "Table", id: "editTable", classes: "fa fa-table"},
            {label: "Chart", id: "editChart", classes: "fa fa-bar-chart"},
            {label: "RealTime", id: "editRealTimeData", classes: "fa fa-globe"}
        ];

        $scope.canvas = new fabric.Canvas('slide');
        $scope.objectSelected = 'null';


// ----- GENERAL -----
        $scope.update = function(){
            $scope.canvas.renderAll();
        };


// ----- TEXT -----
        $scope.avaiableFonts = [
            {name: "Arial"},
            {name: "Courier"},
            {name: "Georgia"},
            {name: "Verdana"}
        ];

        $scope.toggleBold = function(obj) {
            if (obj.fontWeight === "bold")
                obj.fontWeight = "normal";
            else
                obj.fontWeight = "bold";
            $scope.update();
        };

        $scope.toggleItalic = function(obj) {
            if (obj.fontStyle === "italic")
                delete obj.fontStyle;
            else
                obj.fontStyle="italic";
            $scope.update();
        };

        $scope.toggleUnderlined = function(obj){
            if (obj.textDecoration === "underline")
                delete obj.textDecoration;
            else
                obj.textDecoration = 'underline';
            $scope.update();
        };

        $scope.updateColor = function(obj) {
            obj.fill = obj.fontColor;
            $scope.update();
        };


// ----- MODAL ELEMENT -----
        $scope.openModal = function (elementType) {
            if(elementType === "editText") {
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/text.html',
                    controller: 'TextCtrl'
                });

                modalInstance.result.then(function (text) {
                    $scope.addText(text);
                });

            } else if (elementType === "editImage"){
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/image.html',
                    controller: 'ImageCtrl'
                });

                modalInstance.result.then(function (selectedImg) {
                    $scope.insertImageOnCanvas(selectedImg);
                });

            } else if (elementType === "presentationStyle"){
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/presentationStyle.html',
                    controller: 'PresentationStyleCtrl'
                });

                modalInstance.result.then(function (style) {
                    presentationService.update({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {theme:style.theme, transition:style.transition});
                });
            }
        };


// ----- CANVAS -----


        $scope.calculateZoomFactor = function($window) {
            var canvasWidth = (800 / 1320) * angular.element($window).width();
            var factor = canvasWidth / 800;
            return factor;
        };

        $scope.zoomCanvas = function (factor) {
            $scope.canvas.setHeight($scope.canvas.getHeight() * factor);
            $scope.canvas.setWidth($scope.canvas.getWidth() * factor);

            var objects = $scope.canvas.getObjects();
            for (var i in objects) {
                var scaleX = objects[i].scaleX;
                var scaleY = objects[i].scaleY;
                var left = objects[i].left;
                var top = objects[i].top;

                var tempScaleX = scaleX * factor;
                var tempScaleY = scaleY * factor;
                var tempLeft = left * factor;
                var tempTop = top * factor;

                objects[i].scaleX = tempScaleX;
                objects[i].scaleY = tempScaleY;
                objects[i].left = tempLeft;
                objects[i].top = tempTop;

                objects[i].setCoords();
            }

            $scope.canvas.calcOffset();
            $scope.canvas.renderAll();
        };

        $scope.zoomCanvas($scope.calculateZoomFactor($window));


        $scope.resetCanvasSize = function() {
            var scaleResetFactor = 800 / $scope.canvas.getWidth(); // fattore per portare i valori a rapporto 1:1
            $scope.zoomCanvas(scaleResetFactor);
        };


// ----- CANVAS FUNCTION -----


        //this function recalculate canvas scale on window resize
        angular.element($window).bind('resize', function () {
            $scope.resetCanvasSize();
            $scope.zoomCanvas($scope.calculateZoomFactor($window));
        });

        $scope.canvas.on('selection:cleared', function() {
            if ($scope.objectSelected !== "null") {
                $scope.objectSelected = "null"
                $scope.$apply();
            }
        });

        $scope.canvas.on('object:modified', function(options) {
            $scope.objectSelected = options.target;
            $scope.$apply();
        });

        $scope.canvas.on('object:moving', function(options) {
            $scope.objectSelected = options.target;
            $scope.$apply();
        });

        $scope.canvas.on('object:selected', function(options) {
            $scope.objectSelected = options.target;
            $scope.$apply();
        });

        $scope.removeObject = function() {
            $scope.canvas.remove($scope.canvas.getActiveObject());
        };

        $scope.addText = function(text){
            $scope.canvas.add(new fabric.Text(text, {
                fontFamily: 'Arial',
                fontSize: 25
            }));
        };

        $scope.insertImageOnCanvas = function(source_path){
            fabric.Image.fromURL(source_path, function(oImg) {
                oImg.scale(0.5).setFlipX(true);
                oImg.set({
                    left: $scope.canvas.width / 10,
                    top: $scope.canvas.height / 5,
                    scaleY: ($scope.canvas.height * 0.3) / oImg.width,
                    scaleX: ($scope.canvas.height * 0.3) / oImg.width
                });
                $scope.canvas.add(oImg);
            });
        };

        $scope.bringForward = function (obj) {
            obj.bringForward(false);
        };

        $scope.sendBackwards = function (obj) {
            obj.sendBackwards(false);
        };


// ----- LOCAL DATA -----

        var incrementCurrentX = function () {
            localData.currentX ++;
        };

        var decrementCurrentX = function () {
            if (localData.currentX > 1)
                localData.currentX --;
        };

        var decrementCurrentY = function () {
            if (localData.currentY > 1)
                localData.currentY --;
        };

        var incrementCurrentY = function () {
            localData.currentY ++;
        };

        var resetCurrentY = function () {
            localData.currentY = 1;
        };


// ----- I/O SLIDE -----


        // get slide[currentX, currentY]'s id
        $scope.getIdSlide = function (position) {
            var index = '';
            if (position === "up") {
                index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX, yIndex:localData.currentY - 1});
            }

            else if (position === "down") {
                index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX, yIndex:localData.currentY+1});
            }

            else if (position === "right") {
                index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX+1, yIndex:1});
            }

            else if (position === "left") {
                index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX-1, yIndex:1});
            }

            index.$promise.then (
                function(data) {
                    if (index.id !== null)
                        $scope.currentSlide = index.id;
                        $scope.loadSlide();
                },
                function(data) {
                });
        };

        // load slide [currentX, currentY]
        $scope.loadSlide = function () {
            $scope.canvas.clear().renderAll();

            var load = slideService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide});
            load.$promise.then (
                function(data) {
                    var slide = {
                        objects: load.components,
                        background: load.background
                    };
                    $scope.canvas.loadFromJSON(slide, $scope.canvas.renderAll.bind($scope.canvas));
                    localData.currentX = load.xIndex;
                    localData.currentY = load.yIndex;
                },
                function(data) {
                });

            $scope.update();
        };


        // save slide that already exists
        $scope.updateSlide = function () {
            var slideJSON = $scope.canvas.toJSON({suppressPreamble: true});
            var slideSVG = $scope.canvas.toSVG({suppressPreamble: true});

                var parser = new DOMParser();
                var doc = parser.parseFromString(slideSVG, "image/svg+xml");

                var width = doc.firstChild.getAttribute('width');
                var height = doc.firstChild.getAttribute('height');
                doc.firstChild.setAttribute('viewBox', '0 0 ' + width + ' ' + height);

                doc.firstChild.setAttribute('preserveAspectRatio', 'xMidYMin meet');
                slideSVG = doc.firstChild.outerHTML;

            slideService.update({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide}, {xIndex:localData.currentX, yIndex:localData.currentY, components:slideJSON.objects, background:slideJSON.background, svg:slideSVG});
        };


        // create new slide
        $scope.saveSlide = function (position) {
            if (position === 'up') {
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:localData.currentY});
            }
            else if (position === 'down') {
                incrementCurrentY();
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:localData.currentY});
            }
            else if (position === 'right') {
                incrementCurrentX();
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:1});
            }
            else if (position === 'left') {
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:1});
            }

            slide.$promise.then (
                function(data) {
                    $scope.currentSlide = slide._id;
                    localData.currentX = slide.xIndex;
                    localData.currentY = slide.yIndex;
                    $scope.updateSlide();
                },
                function(data) {
                });
        };

        // remove current slide
        $scope.deleteSlide = function () {
            var del = slideService.delete({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide});

            del.$promise.then (
                function(data) {
                    if (localData.currentY > 1)
                        $scope.getIdSlide("up");
                    else
                        $scope.getIdSlide("left");
                },
                function(data) {
                });
        };

        $scope.adjustSVGViewbox = function(svgString){    //da chiamare anche al resize della pagina

            var parser = new DOMParser();
            var doc = parser.parseFromString(svgString, "image/svg+xml");

            doc.firstChild.setAttribute('width', 140);
            doc.firstChild.setAttribute('height', 105);

            var svgString = doc.firstChild.outerHTML;

            return svgString;
        };

        $scope.drawGrid = function (){
            var results = presentationDataService.get({user: $scope.user, project: $scope.currentProject.id, presentation: $scope.currentProject.presentation});

            results.$promise.then(
                function(data){
                    console.log(data);
                    var currentX=localData.currentX;
                    var currentY=localData.currentY;

                    $scope.GridsterColumnsIds = [];
                    $scope.GridsterSlidesSVG = [];
                    for (var xVal in results) {
                        if(isNaN(xVal) === false){
                            for (var yVal in results[xVal]) {
                                var slideItem = {
                                    sizeX: 1,
                                    sizeY: 1,
                                    row: Number(yVal)-1,
                                    col: Number(xVal)-1,
                                    src: $sce.trustAsHtml($scope.adjustSVGViewbox(results[xVal][yVal].svg)),
                                    selected:"unselectedSlideInGrid"
                                };
                                //console.log("x: "+ currentX + " vs " + xVal + " - y: "+ currentY + " vs " + Number(yVal)+1);
                                if(Number(currentX) === Number(xVal) && Number(currentY) === Number(yVal)+1)
                                    slideItem.selected="selectedSlideInGrid";
                                if(xVal>$scope.maxX)
                                    $scope.maxX=xVal;
                                $scope.GridsterSlidesSVG.push(slideItem);
                                if ($scope.GridsterColumnsIds.indexOf(slideItem.row) == -1) {
                                    $scope.GridsterColumnsIds.push(slideItem.row);

                                }
                            }
                        }
                    }
                    $scope.gridsterConfig.columns=Number($scope.maxX)+1;
                    //$scope.$apply();
                }
            );
        };

        $scope.$on('showPresentationEditor', function () {
            $scope.currentSlide = $scope.currentProject.firstSlide;
            $scope.loadSlide();
            //$scope.drawGrid();
        });

        // add new slide
        $scope.addSlide = function (position) {
            $scope.updateSlide();
            $scope.canvas.clear().renderAll();
            $scope.saveSlide(position);
            $scope.drawGrid();
            $scope.toggleGridVisibility();
            $scope.toggleGridVisibility();
           // $scope.$apply();
        };

        // change slide
        $scope.changeSlide = function (position) {
            $scope.updateSlide();
            $scope.getIdSlide(position);
            $scope.drawGrid();
            $scope.toggleGridVisibility();
            $scope.toggleGridVisibility();
           // $scope.$apply();
        };

        //GRIDSTER

        $scope.gridVisibility=false;

        $scope.toggleGridVisibility = function(){
            if ( $scope.gridVisibility === true)
                $scope.gridVisibility=false;
            else{
                $scope.drawGrid();
                $scope.gridVisibility=true;
            }

        };

        $scope.updateGrid= function(){
        };

        $scope.gridsterConfig = {
            minRows: 1,
            resizable: {enable: false},
           // avoid_overlapped_widgets: true,
            defaultSizeX:140,
            defaultSizeY:105,
            //widgetBaseDimensions: [140, 105],
            columns:$scope.maxX
        };

}]);
