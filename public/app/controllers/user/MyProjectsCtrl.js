angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', function($scope, $rootScope, $modal) {

        $scope.currentProjectName= "Progetto di diga - papà castoro e giovani marmotte";

        $scope.Projects = [
            {
                Title: "MyProject1",
                sections: ["Presentation", "Infographics"],
                id:1
            }, {
                Title: "MyProject2",
                sections: ["Presentation", "Infographics"],
                id:2
            }, {
                Title: "MyProject3",
                sections: ["Presentation", "Infographics"],
                id:3
            }, {
                Title: "MyProject4",
                sections: ["Presentation", "Infographics"],
                id:4
            }, {
                Title: "MyProject5",
                sections: ["Presentation", "Infographics"],
                id:5
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
                console.log(data);
                $scope.Projects.push({Title:"placeholder title",
                    sections: ["Presentation", "Infographics"],
                    id:"zz"});
                //modalInstance.close();
            });
            //console.log(data);

        };
}]);
