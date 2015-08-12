angular.module('app.controllers.SlideEditorCtrl', ['ngRoute'])

    .controller('SlideEditorCtrl', ['$scope', '$modal', 'slideFactory', 'presentationData', function($scope, $modal, slideFactory, presentationData) {

        $scope.components = [
            {
                label: "Text",
                id: "editText",
                classes: "fa fa-font"
            },
            {
                label: "Image",
                id: "editImage",
                classes: "fa fa-camera-retro"
            },
            {
                label: "Table",
                id: "editTable",
                classes: "fa fa-table"
            },
            {
                label: "Chart",
                id: "editChart",
                classes: "fa fa-bar-chart"
            },
            {
                label: "RealTime",
                id: "editRealTimeData",
                classes: "fa fa-globe"
            }
        ];


        var localData = {};
            localData.currentX = 1;
            localData.currentY = 1;

            localData.maxX = 2;
            localData.maxY = [1];


        $scope.update = function(){
            $scope.canvas.renderAll();
        };


        // text
        $scope.toggleBold = function(obj){
            if(obj.fontWeight==="bold"){
                obj.fontWeight="normal";
            }else
            obj.fontWeight="bold";
            $scope.canvas.renderAll();;
        };

        $scope.toggleItalic = function(obj){
            if(obj.fontStyle==="italic"){
                delete obj.fontStyle;
            }else
            obj.fontStyle="italic";
            $scope.canvas.renderAll();
        };

        $scope.toggleUnderlined = function(obj){
            if(obj.textDecoration==="underline"){
                delete obj.textDecoration;
            }else
            obj.textDecoration='underline';
            $scope.canvas.renderAll();
        };

        $scope.avaiableFonts = [
            {name: "Arial"},
            {name: "Courier"},
            // {name: "Fredoka One"},
            {name: "Georgia"},
            // {name: "Indie Flower"},
            // {name: "Lato"},
            {name: "Verdana"}
        ];

        $scope.updateColor = function(obj) {
            obj.fill= obj.fontColor;
            $scope.canvas.renderAll();
        };


        $scope.openModal = function (elementType) {
            if(elementType === "editText") {
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/text.html',
                    controller: 'TextCtrl'
                });

                modalInstance.result.then(function (text) {
                    $scope.addText(text);
                });

            }else if (elementType === "editImage"){
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/image.html',
                    controller: 'ImageCtrl'
                });

                modalInstance.result.then(function (selectedImg) {
                    $scope.insertImageOnCanvas(selectedImg);
                });
            }else if (elementType === "presentationStyle"){
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/presentationStyle.html',
                    controller: 'PresentationStyleCtrl'
                });

                modalInstance.result.then(function (selectedImg) {
                    $scope.insertImageOnCanvas(selectedImg);
                });
            }
        };


        // canvas
        $scope.canvas = new fabric.Canvas('slide');

        var slide = presentationData.loadSlide(localData.currentX, localData.currentY);
        $scope.canvas.loadFromJSON(slide, $scope.canvas.renderAll.bind($scope.canvas));

        $scope.update();
        $scope.objectSelected= "null";

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
                fontFamily: 'Loto',
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

        var offset = function (direction, index) {
            if (direction === "right") {
                localData.maxY.push(0);
                for (i = localData.currentX; i < localData.maxX; ++ i) {
                    localData.maxY[i]= localData.maxY[i-1];
                }
                localData.maxY[localData.currentX-1] = 1;
                for (i = 0; i < slidesSVG.length; ++i) {
                    if (slidesSVG[i].x >= localData.currentX) {
                        ++ slidesSVG[i].x;
                    }
                }
            }
        };


        // load slide
        $scope.loadSlide = function () {
            var slide = presentationData.loadSlide(localData.currentX, localData.currentY);
            $scope.canvas.loadFromJSON(slide, $scope.canvas.renderAll.bind($scope.canvas));
        };


        // add slide
        $scope.addSlide = function (position) {
            if (position === "up") {
                $scope.saveSlide();
                // $scope.canvas.clear();
            }
            else if (position === "down") {
                $scope.saveSlide();
                incrementCurrentY();
                incrementMaxY(localData.currentX);
                // $scope.canvas.clear();
                if (localData.currentY < localData.maxY[localData.currentX-1]) {
                    offset("down", 0);
                }
            }
            else if (position === "left") {
                $scope.saveSlide();
                // $scope.canvas.clear();
            }
            else if (position === "right") {
                $scope.saveSlide();
                incrementCurrentX();
                resetCurrentY();
                incrementMaxX();
                // $scope.canvas.clear();
                if (localData.currentX < localData.maxX) {
                    offset("right", 0);
                }
                localData.maxY[localData.currentX-1]= 1;
            }
        };

        // change slide
        $scope.changeSlide = function (position) {
            if (position === "up") {
                $scope.saveSlide();
                if (localData.currentY > 1) {
                    decrementCurrentY();
                }

                $scope.loadSlide();
                $scope.update();

                if (localData.currentY > 1) {
                    // BUTTON UP ENABLE
                }
                else {
                    // BUTTON UP DISABLE
                }
            }
            else if (position === "down") {
                $scope.saveSlide();
                if (localData.currentY < localData.maxY(localData.currentX)) {
                    incrementCurrentY();
                }

                $scope.loadSlide();
                $scope.update();

                if (localData.currentY < localData.maxY(localData.currentX)) {
                    // BUTTON DOWN ENABLE
                }
                else {
                    // BUTTON DOWN DISABLE
                }
            }
            else if (position === "left") {
                $scope.saveSlide();
                if (localData.currentX > 1) {
                    decrementCurrentX();
                    resetCurrentY();
                }

                $scope.loadSlide();
                $scope.update();

                if (localData.currentX > 1) {
                    // BUTTON LEFT ENABLE
                }
                else {
                    // BUTTON LEFT DISABLE
                }
            }
            else if (position === "right") {
                $scope.saveSlide();
                if (localData.currentX < localData.maxX) {
                    incrementCurrentX();
                    resetCurrentY();
                }

                $scope.loadSlide();
                $scope.update();

                if (localData.currentX < localData.maxX) {
                    // BUTTON RIGHT ENABLE
                }
                else {
                    // BUTTON RIGHT DISABLE
                }
            }
        };

        // serializzazione
        $scope.saveSlide = function () {
            var slideJSON = $scope.canvas.toJSON({suppressPreamble: true});
            presentationData.saveSlide(slideJSON, localData.currentX, localData.currentY);
        };

}]);
