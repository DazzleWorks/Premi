angular.module('app.controllers.SlideEditorCtrl', ['ngRoute'])

    .controller('SlideEditorCtrl', ['$scope', '$rootScope', '$modal', '$window', 'presentationService', 'slideService', function($scope, $rootScope, $modal, $window, presentationService, slideService) {


// ----- VARIABLES & INITIALIZATION -----
        $scope.currentSlide = {};

        var localData = {
            currentX: 1,
            currentY: 1,
            maxX: 0,
            maxY: [0]
        };

        $scope.buttons = {
            up: '',
            right: '',
            down: '',
            left: ''
        };

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

                modalInstance.result.then(function (selectedImg) {
                    $scope.insertImageOnCanvas(selectedImg);
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
                // scale image down, and flip it, before adding it onto canvas
                oImg.scale(0.5).setFlipX(true);
                oImg.set({
                    left: $scope.canvas.width / 10,
                    top: $scope.canvas.height / 5,
                    scaleY: ($scope.canvas.height * 0.8) / oImg.width,
                    scaleX: ($scope.canvas.width * 0.8) / oImg.width
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

        var incrementMaxX = function () {
            localData.maxX ++;
        };

        var incrementMaxY = function (x) {
            localData.maxY[x-1] ++;
        };

        var incrementCurrentX = function () {
            localData.currentX ++;
        };

        var decrementCurrentX = function () {
            localData.currentX --;
        };

        var decrementCurrentY = function () {
            localData.currentY --;
        };

        var incrementCurrentY = function () {
            localData.currentY ++;
        };

        var resetCurrentY = function () {
            localData.currentY = 1;
        };

        // var offset = function (direction, index) {
        //     if (direction === "up") {
        //         // for (i = 0; i < presentationData.slidesJSON.length; ++i) {
        //         //     if (presentationData.slidesJSON[i].x === localData.currentX)
        //         //         if (presentationData.slidesJSON[i].y >= localData.currentY)
        //         //             ++ presentationData.slidesJSON[i].y;
        //         // }
        //     }
        //     else if (direction === "down") {
        //         // for (i = 0; i < presentationData.slidesJSON.length; ++i) {
        //         //     if (presentationData.slidesJSON[i].x === localData.currentX)
        //         //         if (presentationData.slidesJSON[i].y >= localData.currentY)
        //         //             ++ presentationData.slidesJSON[i].y;
        //         // }
        //     }
        //     else if (direction === "left") {
        //         // edit localData's variables
        //         localData.maxY.push(0);
        //         for (i = localData.currentX; i < localData.maxX; ++ i) {
        //
        //             localData.maxY[i] = localData.maxY[i-1];
        //         }
        //         localData.maxY[localData.currentX-1] = 1;
        //
        //         // edit database's data
        //         // for (i = 0; i < presentationData.slidesJSON.length; ++i) {
        //         //     if (presentationData.slidesJSON[i].x >= localData.currentX) {
        //         //         ++ presentationData.slidesJSON[i].x;
        //         //     }
        //         // }
        //     }
        //     else if (direction === "right") {
        //         // edit localData's variables
        //         localData.maxY.push(0);
        //         for (i = localData.currentX; i < localData.maxX; ++ i) {
        //             localData.maxY[i+1] = localData.maxY[i];
        //         }
        //         localData.maxY[localData.currentX-1] = 1;
        //
        //         // edit database's data
        //         // for (i = 0; i < presentationData.slidesJSON.length; ++i) {
        //         //     if (presentationData.slidesJSON[i].x >= localData.currentX) {
        //         //         ++ presentationData.slidesJSON[i].x;
        //         //     }
        //         // }
        //     }
        // };


// ----- I/O SLIDE -----


        // get slide[currentX, currentY]'s id
        $scope.getIdSlide = function () {
            // 1) if (maxX === 0 and maxY[0] === 0) load maxX and maxY
            // 2) get the slide's id from backend with x === currentX and y === currentY, assign it to $rootScope.currentProject.slide

            // temporary solution
            $scope.currentSlide.id = $scope.currentProject.firstSlide;
        };

        // load slide [currentX, currentY]
        $scope.loadSlide = function () {
            $scope.getIdSlide();
            var slide = slideService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide.id});

            $scope.canvas.loadFromJSON(slide, $scope.canvas.renderAll.bind($scope.canvas));
            $scope.update();
        };

        // create new slide
        $scope.saveSlide = function (position) {
            if (position === 'up') {
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:localData.currentY});
            }
            else if (position === 'down') {
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:localData.currentY + 1});
            }
            else if (position === 'right') {
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:1});
            }
            else if (position === 'left') {
                var slide = slideService.save({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation}, {xIndex:localData.currentX, yIndex:1});
            }
            $scope.currentSlide = slide.id;

            localData.currentX = slide.x;
            localData.currentY = slide.y;

            if (position === 'right' || position === 'left')
                incrementMaxX();
            else if (position === 'up' || position === 'down')
                incrementMaxY(localData.currentX);

        };

        // save slide that already exists
        $scope.updateSlide = function () {
            var slideJSON = $scope.canvas.toJSON({suppressPreamble: true}); $scope.slideJSON = slideJSON;
            var slideSVG = $scope.canvas.toSVG({suppressPreamble: true}); $scope.slideSVG = slideSVG;

            slideService.update({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide.id}, {xIndex:localData.currentX, yIndex:localData.currentY, components:slideJSON.objects, background:slideJSON.background, svg:slideSVG});
        };

        // remove current slide
        $scope.deleteSlide = function () {
            slideService.delete({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide.id});

            if (localData.currentY > 1)
                decrementCurrentY();
            else
                decrementCurrentX();
            $scope.loadSlide();
        };

        $scope.$on('showPresentationEditor', function () {
            $scope.loadSlide();
        });

        // add new slide
        $scope.addSlide = function (position) {
            $scope.updateSlide();
            $scope.canvas.clear();
            $scope.saveSlide(position);
        };

        // change slide
        $scope.changeSlide = function (position) {
            if (position === "up") {
                if (localData.currentY > 1) {
                    console.log("up");
                    $scope.updateSlide();
                    decrementCurrentY();
                    $scope.loadSlide();
                }
                if (localData.currentY > 1)
                    $scope.buttons.up = '';
                else
                    $scope.buttons.up = 'disabled';
                $scope.buttons.down = '';
            }
            else if (position === "down") {
                if (localData.currentY < localData.maxY[localData.currentX]) {
                    $scope.updateSlide();
                    incrementCurrentY();
                    $scope.loadSlide();
                }
                if (localData.currentY < localData.maxY[localData.currentX])
                    $scope.buttons.down = '';
                else
                    $scope.buttons.down = 'disabled';
                $scope.buttons.up = '';
            }
            else if (position === "right") {
                if (localData.currentX < localData.maxX) {
                    $scope.updateSlide();
                    incrementCurrentX();
                    resetCurrentY();
                    $scope.loadSlide();
                }
                if (localData.currentX < localData.maxX)
                    $scope.buttons.right = '';
                else
                    $scope.buttons.right = 'disabled';
                $scope.buttons.left = '';
            }
            else if (position === "left") {
                if (localData.currentX > 1) {
                    $scope.updateSlide();
                    decrementCurrentX();
                    resetCurrentY();
                    $scope.loadSlide();
                }
                if (localData.currentX > 1)
                    $scope.buttons.left = '';
                else
                    $scope.buttons.left = 'disabled';
                $scope.buttons.right = '';
            }
        };
}]);
