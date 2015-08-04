angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', function($scope, $rootScope, $modal) {
        $scope.Projects = [
            {
                Title: "MyProject1",
                sections: ["Presentation", "Infographics"]
            }, {
                Title: "MyProject2",
                sections: ["Presentation", "Infographics"]
            }, {
                Title: "MyProject3",
                sections: ["Presentation", "Infographics"]
            }, {
                Title: "MyProject4",
                sections: ["Presentation", "Infographics"]
            }, {
                Title: "MyProject5",
                sections: ["Presentation", "Infographics"]
            }
        ];

        $scope.infographics=[
            {   title:"Title1",
                id:"a1",
                img:"../assets/img/infographicPlaceholder.png"
                },
            {
                title:"Title2",
                id:"a2",
                img:"../assets/img/infographicPlaceholder.png"
            },
            {
                title:"Title3",
                id:"a3",
                img:"../assets/img/infographicPlaceholder.png"
            },
            {
                title:"Title4",
                id:"a4",
                img:"../assets/img/infographicPlaceholder.png"},
            {
                title:"Title5",
                id:"a5",
                img:"../assets/img/infographicPlaceholder.png"},
            {
                title:"Title6",
                id:"a6",
                img:"../assets/img/infographicPlaceholder.png"},
            {
                title:"Title7",
                id:"a7",
                img:"../assets/img/infographicPlaceholder.png"}
        ];

        $scope.showPresentationEditorView = function(){
			$rootScope.$broadcast('showPresentationEditor');
		};

        $scope.deleteProject = function (){
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/deleteProject.html',
                controller: 'DeleteProjectCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                $modalInstance.close();
            });

        };

        $scope.deleteInfographic = function (){
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/deleteInfographic.html',
                controller: 'DeleteInfographicCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                $modalInstance.close();
            });

        };

}]);
