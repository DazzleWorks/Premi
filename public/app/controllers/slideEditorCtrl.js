angular.module('app.controllers.slideEditorCtrl', ['ngRoute'])

    .controller('slideEditorCtrl', ['$scope', '$modal', function($scope, $modal) {

        $scope.components = [
            {
                label: "Text",
                id: "editText",
                classes: "fa fa-font fa-2x"
            },
            {
                label: "Image",
                id: "editImage",
                classes: "fa fa-camera-retro fa-2x"
            },
            {
                label: "Table",
                id: "editTable",
                classes: "fa fa-table fa-2x"
            },
            {
                label: "Chart",
                id: "editChart",
                classes: "fa fa-bar-chart fa-2x"
            },
            {
                label: "RealTimeData",
                id: "editRealTimeData",
                classes: "fa fa-globe fa-2x"
            }
        ];

        $scope.update=function(){
            $scope.canvas.renderAll();
        };



        // text
        $scope.toggleBold=function(obj){
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
            {name: "Fredoka One"},
            {name: "Georgia"},
            {name: "Indie Flower"},
            {name: "Lato"},
            {name: "Verdana"}
        ];

        $scope.updateColor=function(obj){
            obj.fill= obj.fontColor;
            $scope.canvas.renderAll();
        };


        $scope.openModal = function (elementType) {
            if(elementType === "editText") {
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/modalTextView.html',
                    controller: 'modalTextCtrl'
                });

                modalInstance.result.then(function (text) {
                   // console.log(text);  // RITORNA IL TESTO DA INSERIRE NELL'OGGETTO
                    $scope.addText(text);
                });

            }else if (elementType === "editImage"){
                var modalInstance = $modal.open({
                    templateUrl: 'app/templates/modalImageView.html',
                    controller: 'modalImageCtrl'
                });

                modalInstance.result.then(function (selectedImg) {
                    console.log(selectedImg);
                    $scope.insertImageOnCanvas(selectedImg);
                });
            }
        };



        // canvas
        $scope.canvas = new fabric.Canvas('slide');
        $scope.canvas.loadFromJSON($scope.slideComponents, $scope.canvas.renderAll.bind($scope.canvas));
        $scope.objectSelected= "null";

        $scope.canvas.on('selection:cleared', function() {
            $scope.objectSelected = "null";
            $scope.$apply();
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

        $scope.canvas.on('object:modified', function(options) {
        });

        $scope.removeObject= function(obj) {
            $scope.canvas.remove(obj);  // FUNZIONA MA DA ERRORE
        };

        $scope.addText= function(text){
            $scope.canvas.add(new fabric.Text(text, {
                fontFamily: 'Loto',
                fontSize: 25
            }));
        };

        $scope.insertImageOnCanvas= function(source_path){
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



        // serializzazione
        jQuery("#btnSerialize").click(function() {
            jQuery("#serialized").html(JSON.stringify($scope.canvas));
        });



        // slides components
        $scope.slideComponents = {
            "objects": [
                {
                    "id": 2,
                    "type": "text",
                    "originX": "left",
                    "originY": "top",
                    "left": 50,
                    "top": 50,
                    "width": 100,
                    "height": 50,
                    "fill": "rgb(0,0,0)",
                    "stroke": null,
                    "strokeWidth": 1,
                    "strokeDashArray": null,
                    "strokeLineCap": "butt",
                    "strokeLineJoin": "miter",
                    "strokeMiterLimit": 10,
                    "scaleX": 1,
                    "scaleY": 1,
                    "zIndex": 1,
                    "angle": 0,
                    "flipX": false,
                    "flipY": false,
                    "opacity": 1,
                    "shadow": null,
                    "visible": true,
                    "clipTo": null,
                    "backgroundColor": "",
                    "fillRule": "nonzero",
                    "globalCompositeOperation": "source-over",
                    "text": "Beeeeee",
                    "fontSize": 40,
                    "fontWeight": "normal",
                    "fontFamily": "Lato",
                    "fontStyle": "",
                    "lineHeight": 1.16,
                    "textDecoration": "",
                    "textAlign": "left",
                    "textBackgroundColor": ""
                }
            ],
            "background": ""
        };
}]);
