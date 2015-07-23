angular.module('app.controllers.PresentationCtrl', ['ngRoute'])

.controller('PresentationCtrl', ['$scope', '$sce', 'presentationData', function($scope, $sce, presentationData) {

    $scope.columnsIds=[1,2];

    presentationData.loadSlide();
//    $scope.getColumnsIds= function(){
//        var lookup = {};
//        var items = $scope.slidesSVG;
//
//
//        for (var item, i = 0; item = items[i++];) {
//          var id = item.x;
//          if (!(id in lookup)) {
//            lookup[id] = 1;
//            $scope.columnsIds.push(id);
//          }
//        }
//    };
//    $scope.getColumnsIds();
        console.log( $scope.columnsIds);

        /* $scope.s ={"objects": [{"id":1, "type": "image", "originX": "left", "originY": "top", "left": -253, "top": -42, "width": 2560, "height": 1600, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 0.46, "scaleY": 0.4, "angle": 0, "flipX": true, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "src": "http://i.imgur.com/wt4NRqA.jpg", "filters": [], "crossOrigin": "", "alignX": "none", "alignY": "none", "meetOrSlice": "meet"}, {"type": "text", "originX": "left", "originY": "top", "left": 524.63, "top": 157.81, "width": 163.36, "height": 52.43, "fill": "#e2ff00", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 317.69, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Beeeeee", "fontSize": 40, "fontWeight": "bold", "fontFamily": "Fredoka One", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}, {"type": "text", "originX": "left", "originY": "top", "left": 417.47, "top": 376.07, "width": 157.76, "height": 100.93, "fill": "#ff0000", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 323.35, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Mario", "fontSize": 77, "fontWeight": "normal", "fontFamily": "Indie Flower", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}], "background": ""};
    $scope.slides = [
    {"id":1, "objects": [{"type": "image", "originX": "left", "originY": "top", "left": -253, "top": -42, "width": 2560, "height": 1600, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 0.46, "scaleY": 0.4, "angle": 0, "flipX": true, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "src": "http://i.imgur.com/wt4NRqA.jpg", "filters": [], "crossOrigin": "", "alignX": "none", "alignY": "none", "meetOrSlice": "meet"}, {"type": "text", "originX": "left", "originY": "top", "left": 524.63, "top": 157.81, "width": 163.36, "height": 52.43, "fill": "#e2ff00", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 317.69, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Beeeeee", "fontSize": 40, "fontWeight": "bold", "fontFamily": "Fredoka One", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}, {"type": "text", "originX": "left", "originY": "top", "left": 417.47, "top": 376.07, "width": 157.76, "height": 100.93, "fill": "#ff0000", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 323.35, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Mario", "fontSize": 77, "fontWeight": "normal", "fontFamily": "Indie Flower", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}], "background": ""},
    {"id":2, "objects": [{"id":2, "type": "image", "originX": "left", "originY": "top", "left": -253, "top": -42, "width": 2560, "height": 1600, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 0.46, "scaleY": 0.4, "angle": 0, "flipX": true, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "src": "http://i.imgur.com/wt4NRqA.jpg", "filters": [], "crossOrigin": "", "alignX": "none", "alignY": "none", "meetOrSlice": "meet"}, {"type": "text", "originX": "left", "originY": "top", "left": 524.63, "top": 157.81, "width": 163.36, "height": 52.43, "fill": "#e2ff00", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 317.69, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Beeeeee", "fontSize": 40, "fontWeight": "bold", "fontFamily": "Fredoka One", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}, {"type": "text", "originX": "left", "originY": "top", "left": 417.47, "top": 376.07, "width": 157.76, "height": 100.93, "fill": "#ff0000", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 323.35, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Mario", "fontSize": 77, "fontWeight": "normal", "fontFamily": "Indie Flower", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}], "background": ""},
    {"id":3, "objects": [{"id":3, "type": "image", "originX": "left", "originY": "top", "left": -253, "top": -42, "width": 2560, "height": 1600, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 0.46, "scaleY": 0.4, "angle": 0, "flipX": true, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "src": "http://i.imgur.com/wt4NRqA.jpg", "filters": [], "crossOrigin": "", "alignX": "none", "alignY": "none", "meetOrSlice": "meet"}, {"type": "text", "originX": "left", "originY": "top", "left": 524.63, "top": 157.81, "width": 163.36, "height": 52.43, "fill": "#e2ff00", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 317.69, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Beeeeee", "fontSize": 40, "fontWeight": "bold", "fontFamily": "Fredoka One", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}, {"type": "text", "originX": "left", "originY": "top", "left": 417.47, "top": 376.07, "width": 157.76, "height": 100.93, "fill": "#ff0000", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 323.35, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Mario", "fontSize": 77, "fontWeight": "normal", "fontFamily": "Indie Flower", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}], "background": ""},
    {"id":4, "objects": [{"id":4, "type": "image", "originX": "left", "originY": "top", "left": -253, "top": -42, "width": 2560, "height": 1600, "fill": "rgb(0,0,0)", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 0.46, "scaleY": 0.4, "angle": 0, "flipX": true, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "src": "http://i.imgur.com/wt4NRqA.jpg", "filters": [], "crossOrigin": "", "alignX": "none", "alignY": "none", "meetOrSlice": "meet"}, {"type": "text", "originX": "left", "originY": "top", "left": 524.63, "top": 157.81, "width": 163.36, "height": 52.43, "fill": "#e2ff00", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 317.69, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Beeeeee", "fontSize": 40, "fontWeight": "bold", "fontFamily": "Fredoka One", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}, {"type": "text", "originX": "left", "originY": "top", "left": 417.47, "top": 376.07, "width": 157.76, "height": 100.93, "fill": "#ff0000", "stroke": null, "strokeWidth": 1, "strokeDashArray": null, "strokeLineCap": "butt", "strokeLineJoin": "miter", "strokeMiterLimit": 10, "scaleX": 1, "scaleY": 1, "angle": 323.35, "flipX": false, "flipY": false, "opacity": 1, "shadow": null, "visible": true, "clipTo": null, "backgroundColor": "", "fillRule": "nonzero", "globalCompositeOperation": "source-over", "text": "Mario", "fontSize": 77, "fontWeight": "normal", "fontFamily": "Indie Flower", "fontStyle": "", "lineHeight": 1.16, "textDecoration": "", "textAlign": "left", "textBackgroundColor": ""}], "background": ""}
];
*/
/**
*
* @param {integer} canvas_id
* @param {json array} obj
* @description create a fabric canvas identified by canvas_id and popolate from obj
*
*/
/*  $scope.createCanvas = function (canvas_id,obj){
$scope.canvas[canvas_id] = new fabric.Canvas(canvas_id);
$scope.canvas[canvas_id].loadFromJSON(obj, $scope.canvas[canvas_id].renderAll.bind( $scope.canvas[canvas_id]));
$scope.update();
$scope.objectSelected= "null";

};

*/
/* $scope.canvas=[];
$scope.html_string='';
$scope.populate= function($sce){
for(var s in $scope.slides) {  //foreach
$scope.html_string+="<div class=\"row\"> <canvas id=\""+$scope.slides[s].id+"\" width=\"800\" height=\"600\" style=\"border:1px solid #000000;\" > </div>";
//console.log(s, $scope.slides[s].id);
//$scope.canvas[$scope.slides[s].id] = new fabric.Canvas( $scope.slides[s].id);
}
$scope.html_string=$sce.trustAsHtml($scope.html_string);
$scope.setupCanvas();
};


$scope.setupCanvas = function(){
for(var s in $scope.slides) {  //qui faccio tutta la creazione degli oggetti canvas di fabric
$scope.canvas[$scope.slides[s].id] = new fabric.Canvas( $scope.slides[s].id.toString());
($scope.canvas[$scope.slides[s].id]).loadFromJSON($scope.slides[s],( $scope.canvas[$scope.slides[s].id]).renderAll.bind( $scope.canvas[$scope.slides[s].id]));
($scope.canvas[$scope.slides[s].id]).renderAll();
console.log($scope.canvas);
}

console.log($scope.canvas);
};

$scope.populate($sce);
*/
//$scope.populate();

/* $scope.canvas = new fabric.Canvas('s');
$scope.canvas.loadFromJSON($scope.s, $scope.canvas.renderAll.bind($scope.canvas));
$scope.canvas.renderAll();
$scope.objectSelected= "null";
*/
}]);
