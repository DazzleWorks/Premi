angular.module('app.controllers.SlideEditorCtrl', ['ngRoute'])

    .controller('SlideEditorCtrl', ['$scope', '$rootScope', '$modal', '$window', 'indexService', 'presentationService', 'slideService', function($scope, $rootScope, $modal, $window, indexService, presentationService, slideService) {


// ----- VARIABLES & INITIALIZATION -----
        $scope.currentSlide = '';

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
                // scale image down, and flip it, before adding it onto canvas
                // oImg.scale(0.5).setFlipX(true);
                oImg.set({
                    left: $scope.canvas.width / 10,
                    top: $scope.canvas.height / 5,
                    // width:($scope.canvas.height * 0.5) / oImg.width
                    // scaleY: ($scope.canvas.height * 0.5) / oImg.width,
                    // scaleX: ($scope.canvas.width * 0.) / oImg.width
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
                // decrementCurrentY();
                    index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX, yIndex:localData.currentY-1});

                // if (localData.currentY > 1)
                //     $scope.buttons.up = '';
                // else
                //     $scope.buttons.up = 'disabled';
                // $scope.buttons.down = '';
            }

            else if (position === "down") {
                // incrementCurrentY();
                index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX, yIndex:localData.currentY+1});

                // if (localData.currentY < localData.maxY[localData.currentX])
                //     $scope.buttons.down = '';
                // else
                //     $scope.buttons.down = 'disabled';
                // $scope.buttons.up = '';
            }

            else if (position === "right") {
                // incrementCurrentX();
                index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX+1, yIndex:1});

                // if (localData.currentX < localData.maxX)
                //     $scope.buttons.right = '';
                // else
                //     $scope.buttons.right = 'disabled';
                // $scope.buttons.left = '';
            }

            else if (position === "left") {
                // decrementCurrentX();
                index = indexService.get({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, xIndex:localData.currentX-1, yIndex:1});

                // if (localData.currentX > 1)
                //     $scope.buttons.left = '';
                // else
                //     $scope.buttons.left = 'disabled';
                // $scope.buttons.right = '';
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
                },
                function(data) {
                });

            if (position === 'right' || position === 'left')
                incrementMaxX();
            else if (position === 'up' || position === 'down')
                incrementMaxY(localData.currentX);

        };

        // save slide that already exists
        $scope.updateSlide = function () {
            var slideJSON = $scope.canvas.toJSON({suppressPreamble: true});
            var slideSVG = $scope.canvas.toSVG({suppressPreamble: true});

            slideService.update({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide}, {xIndex:localData.currentX, yIndex:localData.currentY, components:slideJSON.objects, background:slideJSON.background, svg:slideSVG});
        };

        // remove current slide
        $scope.deleteSlide = function () {
            slideService.delete({user:$scope.user, project:$scope.currentProject.id, presentation:$scope.currentProject.presentation, slide:$scope.currentSlide});

            if (localData.currentY > 1)
                $scope.getIdSlide("up");
            else
                $scope.getIdSlide("left");
        };

        $scope.$on('showPresentationEditor', function () {
            $scope.currentSlide = $scope.currentProject.firstSlide;
            $scope.loadSlide();
        });

        // add new slide
        $scope.addSlide = function (position) {
            $scope.updateSlide();
            $scope.canvas.clear().renderAll();
            $scope.saveSlide(position);
        };

        // change slide
        $scope.changeSlide = function (position) {
            $scope.updateSlide();
            $scope.getIdSlide(position);
            // $scope.loadSlide();
        };
}]);
