angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', 'projectsService', function($scope, $rootScope, $modal, projectsService) {

        $scope.projects = [];
        $rootScope.currentProject = {
            id: "",
            name: "",
            presentation: "",
            slide: ""
        };

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
                img:"../assets/img/infographicPlaceholder.png"
            }
        ];

        var resetCurrentProject = function () {
            $rootScope.currentProject.id = $scope.projects[0].id;
            $rootScope.currentProject.name = $scope.projects[0].name;
            $rootScope.currentProject.presentation = $scope.projects[0].presentation;
            $rootScope.currentProject.slide = $scope.projects[0].slide;
        };

        var findProjectById = function(id){
            var k;
            var obj = {id: "", name: "", presentation: ""};
            for (k = 0; k < $scope.projects.length; ++k) {
                if($scope.projects[k].id === id)
                    obj = $scope.projects[k];
            }
            return obj;
        };

        $scope.setCurrentProject = function (id) {
            var obj = findProjectById(id);
            $rootScope.currentProject.id = obj.id;
            $rootScope.currentProject.name = obj.name;
            $rootScope.currentProject.presentation = obj.presentation;
            $rootScope.currentProject.slide = obj.slide;
        };

        $scope.refreshProjects = function() {
            if ($scope.projects.length === 0) {
                var load = projectsService.query({user:$rootScope.user});
                load.$promise.then (
                    function(data) {
                        for (prj in data) {
                            if (prj !== "$promise" && prj !== "$resolved")
                            $scope.projects.push(
                                {
                                    id: data[prj]._id,
                                    name: data[prj].name,
                                    presentation: data[prj].presentation._id.$id,
                                    slide: data[prj].presentation.slides[0]._id.$id
                                }
                            );
                        };
                        resetCurrentProject();
                    },
                    function(data){
                    });
            }
        };

        $rootScope.$on('loadProjects', $scope.refreshProjects);

        $scope.editProject = function() {
			$rootScope.$broadcast('showPresentationEditor');
		};

        $scope.deleteProject = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/deleteProject.html',
                controller: 'DeleteProjectCtrl',
                scope: $scope,
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                if (data === 'delete'){
                    $scope.projects = [];
                    $scope.refreshProjects();
                }
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

        $scope.newProject = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/newProject.html',
                controller: 'NewProjectCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                if (data !== 'error'){
                    $scope.projects = [];
                    $scope.refreshProjects();
                }
                //modalInstance.close();
            });
        };
}]);
