angular.module('app.controllers.PresentationCtrl', ['ngRoute'])

.controller('PresentationCtrl', ['$scope', '$sce', 'presentationDataService', function($scope, $sce, presentationDataService) {

    $scope.columnsIds=[];
    $scope.theme="league";
    $scope.transition= 'zoom'; // none/fade/slide/convex/concave/zoom
    $scope.slidesSVG=[];
   /* $scope.slidesSVG=[
        {"x":1,"y":1,"src":$sce.trustAsHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="800" height="600" xml:space="preserve"><desc>Created with Fabric.js 1.5.0</desc><defs></defs><rect x="-25" y="-30" rx="0" ry="0" width="50" height="60" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: red; fill-rule: nonzero; opacity: 1;" transform="translate(96.46 138.89) rotate(45)"></rect><g transform="translate(116.6 426.22)"><text font-family="Times New Roman" font-size="40" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"><tspan x="-66.6016" y="8.984" fill="rgb(0,0,0)">x:1, y:1</tspan></text></g></svg>')},
        {"x":1,"y":2,"src":$sce.trustAsHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="800" height="600" xml:space="preserve"><desc>Created with Fabric.js 1.5.0</desc><defs></defs><rect x="-25" y="-30" rx="0" ry="0" width="50" height="60" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: red; fill-rule: nonzero; opacity: 1;" transform="translate(96.46 138.89) rotate(45)"></rect><g transform="translate(116.6 426.22)"><text font-family="Times New Roman" font-size="40" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"><tspan x="-66.6016" y="8.984" fill="rgb(0,0,0)">x:1, y:2</tspan></text></g></svg>')},
        {"x":1,"y":3,"src":$sce.trustAsHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="800" height="600" xml:space="preserve"><desc>Created with Fabric.js 1.5.0</desc><defs></defs><rect x="-25" y="-30" rx="0" ry="0" width="50" height="60" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: red; fill-rule: nonzero; opacity: 1;" transform="translate(96.46 138.89) rotate(45)"></rect><g transform="translate(116.6 426.22)"><text font-family="Times New Roman" font-size="40" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"><tspan x="-66.6016" y="8.984" fill="rgb(0,0,0)">x:1, y:3</tspan></text></g></svg>')},
        {"x":2,"y":1,"src":$sce.trustAsHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="800" height="600" xml:space="preserve"><desc>Created with Fabric.js 1.5.0</desc><defs></defs>	<g transform="translate(137.55 76.22)"><text font-family="Lato" font-size="40" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" ><tspan x="-87.5488" y="8.984" fill="rgb(0,0,0)">x:2, y:1</tspan></text></g><g transform="translate(400 300) scale(0.32 0.24) matrix(-1 0 0 1 0 0) "><image xlink:href="http://i0.wp.com/androidlive.it/wp-content/uploads/2014/08/image_new12.jpg" x="-1000" y="-750" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" width="2000" height="1500" preserveAspectRatio="none"></image></g>')},
        {"x":2,"y":2,"src":$sce.trustAsHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="800" height="600" xml:space="preserve"><desc>Created with Fabric.js 1.5.0</desc><defs></defs>	<g transform="translate(137.55 76.22)"><text font-family="Lato" font-size="40" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" ><tspan x="-87.5488" y="8.984" fill="rgb(0,0,0)">x:2, y:2</tspan></text></g><g transform="translate(400 300) scale(0.32 0.24) matrix(-1 0 0 1 0 0) "><image xlink:href="http://i0.wp.com/androidlive.it/wp-content/uploads/2014/08/image_new12.jpg" x="-1000" y="-750" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" width="2000" height="1500" preserveAspectRatio="none"></image></g>')},
        {"x":2,"y":3,"src":$sce.trustAsHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="800" height="600" xml:space="preserve"><desc>Created with Fabric.js 1.5.0</desc><defs></defs>	<g transform="translate(137.55 76.22)"><text font-family="Lato" font-size="40" font-weight="normal" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" ><tspan x="-87.5488" y="8.984" fill="rgb(0,0,0)">x:2, y:3</tspan></text></g><g transform="translate(400 300) scale(0.32 0.24) matrix(-1 0 0 1 0 0) "><image xlink:href="http://i0.wp.com/androidlive.it/wp-content/uploads/2014/08/image_new12.jpg" x="-1000" y="-750" style="stroke: none; stroke-width: 1; stroke-dasharray: ; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" width="2000" height="1500" preserveAspectRatio="none"></image></g>')}
    ];*/

    /*    $scope.getColumnsIds= function(){
            var lookup = {};
            var items = $scope.slidesSVG;
            $scope.columnsIds=[];

            var item=items[0];
            var i =0;
            for ( item, i = 0; item = items[i++];) {
              var id = item.x;
              if (!(id in lookup)) {
                lookup[id] = 1;
                $scope.columnsIds.push(id);
              }
            }
       };
*/
        $scope.firstLoadDone=false;


        $scope.setupPresentation = function(projectId,presentationId,username){
            if($scope.firstLoadDone === false) {
                $scope.firstLoadDone = true;
                $scope.slideSVG = [];
                /*
                 $scope.slideSVG=presentationDataService.query({
                 user:'a',
                 project:'55c4b161edee62fe0b8b4568',
                 presentation:'55d487d7edee627a0c8b456b'}
                 );
                 */

                var results = presentationDataService.query({
                        user: username,
                        project: projectId,
                        presentation: presentationId
                    }
                );

                results.$promise.then(
                    function(data){
                        console.log(results);

                        for (var k = 0; k < results.length; ++k) {
                            var slideItem ={
                                x:results[k].xIndex,
                                y:results[k].yIndex,
                                src:$sce.trustAsHtml(results[k].svg)
                            };
                            $scope.slidesSVG.push(slideItem);
                            if( $scope.columnsIds.indexOf(slideItem.x) == -1){
                                $scope.columnsIds.push(slideItem.x);
                            }
                        }
                       // $scope.getColumnsIds();
                        console.log($scope.columnsIds);
                        $scope.apply;
                    });


            }
        };


        //console.log(presentationDataService.query({user:'a', project:'55c4b161edee62fe0b8b4568',presentation:'55d487d7edee627a0c8b456b'}));



}]);
