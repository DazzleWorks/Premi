angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', function($scope, $rootScope, $modal) {

        $scope.currentProjectName= "Progetto di diga - papà castoro e giovani marmotte";

        $scope.projects = [
            {
                title: "MyProject1",
                sections: ["Presentation", "Infographics"],
                id:1
            }, {
                title: "MyProject2",
                sections: ["Presentation", "Infographics"],
                id:2
            }, {
                title: "MyProject3",
                sections: ["Presentation", "Infographics"],
                id:3
            }, {
                title: "MyProject4",
                sections: ["Presentation", "Infographics"],
                id:4
            }, {
                title: "MyProject5",
                sections: ["Presentation", "Infographics"],
                id:5
            }
        ];

        $scope.infographics=[
            {   title:"title1",
                id:"a1",
                img:"../assets/img/infographicPlaceholder.png"
                },
            {
                title:"title2",
                id:"a2",
                img:"../assets/img/infographicPlaceholder.png"
            },
            {
                title:"title3",
                id:"a3",
                img:"../assets/img/infographicPlaceholder.png"
            },
            {
                title:"title4",
                id:"a4",
                img:"../assets/img/infographicPlaceholder.png"},
            {
                title:"title5",
                id:"a5",
                img:"../assets/img/infographicPlaceholder.png"},
            {
                title:"title6",
                id:"a6",
                img:"../assets/img/infographicPlaceholder.png"},
            {
                title:"title7",
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
                //modalInstance.close();
            });

        };

        $scope.deleteInfographic = function (id, index){
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/deleteInfographic.html',
                controller: 'DeleteInfographicCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                //$scope.infographics ;
                $scope.infographics.forEach(function(element, index, array){
                    console.log(id);
                    if(element.id === id){
                        delete $scope.infographics[element];
                    }
                });
                $scope.apply;
                console.log($scope.infographics);
                $scope.infographics.splice(index, 1);
                //$modalInstance.close();
            });

        };

        $scope.newProject = function (){
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/newProject.html',
                controller: 'NewProjectCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                if (data !== 'error'){
                    $scope.projects.push(
                        {
                            title: data.name,
                            id: data.id,
                            sections: ["Presentation", "Infographics"]
                        }
                    );
                }
                //modalInstance.close();
            });
            //console.log(data);

        };
}]);
