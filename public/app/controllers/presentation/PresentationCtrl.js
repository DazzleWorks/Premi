angular.module('app.controllers.PresentationCtrl', ['ngRoute'])

.controller('PresentationCtrl', ['$scope', '$sce', 'presentationDataService', function($scope, $sce, presentationDataService) {

    $scope.columnsIds=[];
    $scope.theme = "league";
    $scope.transition = 'zoom'; // none/fade/slide/convex/concave/zoom
    $scope.slidesSVG = [];
    $scope.firstLoadDone = false;

    $scope.setupPresentation = function(projectId,presentationId,username) {
        if($scope.firstLoadDone === false) {
            $scope.firstLoadDone = true;
            $scope.slideSVG = [];

            var results = presentationDataService.get({user: username, project: projectId, presentation: presentationId});

            results.$promise.then(
                function(data){
                    $scope.columnsIds = [];
                    $scope.slidesSVG = [];
                    for (var xVal in results) {
                        if(isNaN(xVal) === false) {
                            for (var yVal in results[xVal]) {
                                var slideItem = {
                                    x: xVal,
                                    y: yVal,
                                    src: $sce.trustAsHtml(results[xVal][yVal].svg)
                                };
                                $scope.slidesSVG.push(slideItem);
                                if ($scope.columnsIds.indexOf(slideItem.x) == -1) {
                                    $scope.columnsIds.push(slideItem.x);
                                }
                            }
                        }
                    }
                    $scope.apply;
                },

                function (data) {
                });
        }
    };

}]);
