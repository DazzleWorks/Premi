angular.module('app.controllers.presentationEditorCtrl', ['ngRoute'])

    .controller('presentationEditorCtrl', ['$scope', function($scope) {

        $scope.test = 'TEST_TXT';

        $scope.EditPanels = [
            {
                id: "textEdit",
                visible: "true"
            },
            {
                id: "imageEdit",
                visible: "true"
            },
            {
                id: "tableEdit",
                visible: "true"
            },
            {
                id: "chartEdit",
                visible: "true"
            },
            {
                id: "RealTimeDataEdit",
                visible: "true"
            },
            {
                id: "ShapeEdit",
                visible: "true"
            },
        ];

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
            },
            {
                label: "Shape",
                id: "editShape",
                classes: "fa fa-square fa-2x"
            }
        ];

        //Slides Components
        $scope.slideComponents = {
            "objects": [
                {"id": 1,
                "type": "rect",
                "originX": "left",
                "originY": "top",
                "left": 100,
                "top": 100,
                "width": 50,
                "height": 60,
                "fill": "red",
                "stroke": null,
                "strokeWidth": 1,
                "strokeDashArray": null,
                "strokeLineCap": "butt",
                "strokeLineJoin": "miter",
                "strokeMiterLimit": 10,
                "scaleX": 1,
                "scaleY": 1,
                "angle": 45,
                "flipX": false,
                "flipY": false,
                "opacity": 1,
                "shadow": null,
                "visible": true,
                "clipTo": null,
                "backgroundColor": "",
                "fillRule": "nonzero",
                "globalCompositeOperation": "source-over",
                "rx": 0,
                "ry": 0
            },
            {
                "id": 2,
                "type": "text",
                "originX": "left",
                "originY": "top",
                "left": 50,
                "top": 400,
                "width": 133.2,
                "height": 52.43,
                "fill": "rgb(0,0,0)",
                "stroke": null,
                "strokeWidth": 1,
                "strokeDashArray": null,
                "strokeLineCap": "butt",
                "strokeLineJoin": "miter",
                "strokeMiterLimit": 10,
                "scaleX": 1,
                "scaleY": 1,
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
                "fontFamily": "Times New Roman",
                "fontStyle": "",
                "lineHeight": 1.16,
                "textDecoration": "",
                "textAlign": "left",
                "textBackgroundColor": ""
            }
        ],
        "background": ""};

        $scope.canvas = new fabric.Canvas('slide');
        $scope.canvas.loadFromJSON($scope.slideComponents, $scope.canvas.renderAll.bind($scope.canvas));

        $scope.canvas.on('selection:cleared', function() {
            // console.log("persa selezione");
            $scope.objectSelected ="null";
            $scope.$apply();
        });

        $scope.canvas.on('object:modified', function(options) {
            //console.log(options.target.type);
            $scope.objectSelected=options.target;
            $scope.$apply();
        });

        $scope.canvas.on('object:moving', function(options) {
            //console.log(options.target.type);
            $scope.objectSelected=options.target;
            $scope.$apply();
        });

        $scope.canvas.on('object:selected', function(options) {
            //console.log(options.target.type);
            $scope.objectSelected=options.target;
            $scope.$apply();
        });

        $scope.canvas.on('object:modified', function(options) {
            //alert(options.e.id + ' ' + options.e.clientX + ' ' + options.e.clientY); //e evento generico
            //alert(options.target.id + ' ' + options.e.clientX + ' ' + options.e.clientY); //target ritorna l'oggetto
            console.log('obj_id: ' + options.target.id + 'obj_angle: ' + options.target.angle + ' type: ' + options.target.type);
        });


        jQuery("#btnSerialize").click(function() {
            jQuery("#serialized").html(JSON.stringify($scope.canvas));
            // '{"objects":[],"background":"rgba(0, 0, 0, 0)"}'
        });

        $scope.updateTextSize = function(obj){
        };

        $scope.toggleBold=function(obj){
            if(obj.fontWeight==="bold"){
                obj.fontWeight="normal";
            }else
                obj.fontWeight="bold";
            $scope.canvas.renderAll();;
        };

        $scope.toggleItalic=function(obj){
            if(obj.fontStyle==="italic"){
                delete obj.fontStyle;
            }else
               obj.fontStyle="italic";
            $scope.canvas.renderAll();
            //$scope.canvas.renderAll.bind($scope.canvas);
        };

        $scope.toggleUnderlined=function(obj){
            if(obj.textDecoration==="underline"){
                 delete obj.textDecoration;
            }else
            obj.textDecoration='underline';
            $scope.canvas.renderAll();
        };

        $scope.update=function(){
            $scope.canvas.renderAll();
        };

}]);
