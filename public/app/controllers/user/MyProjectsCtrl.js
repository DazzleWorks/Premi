angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', 'projectsService', function($scope, $rootScope, $modal, projectsService) {

        $scope.projects = [];
        $rootScope.currentProject = {
            id: "",
            name: "",
            presentation: "",
            firstSlide: "",
            transition:"slide"
            // maxX: 0,
            // maxY: 0
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
            if($scope.projects[0]) {
                $rootScope.currentProject.id = $scope.projects[0].id;
                $rootScope.currentProject.name = $scope.projects[0].name;
                $rootScope.currentProject.presentation = $scope.projects[0].presentation;
                $rootScope.currentProject.firstSlide = $scope.projects[0].firstSlide;
                $rootScope.currentProject.transition = $scope.projects[0].transition;
                // $rootScope.currentProject.maxX = $scope.projects[0].maxX;
                // $rootScope.currentProject.maxY = $scope.projects[0].maxY;
            }else{
                $rootScope.currentProject.id = "";
                $rootScope.currentProject.name = "";
                $rootScope.currentProject.presentation = "";
                $rootScope.currentProject.firstSlide = "";
                $rootScope.currentProject.transition = "";
            }

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
            $rootScope.currentProject.firstSlide = obj.firstSlide;
            $rootScope.currentProject.transition = obj.transition;
            // $rootScope.currentProject.maxX = obj.maxX;
            // $rootScope.currentProject.maxY = obj.maxY;
        };

        $scope.refreshProjects = function() {
            $scope.projects = [];
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
                                firstSlide: data[prj].presentation.slides[0]._id.$id,
                                transition:data[prj].presentation.transition
                                // maxX: data[prj].presentation.maxX,
                                // maxY: data[prj].presentation.maxY
                            }
                        );
                    };
                    resetCurrentProject();
                },
                function(data){
                    resetCurrentProject();
                    $scope.apply;
                });
        };

        $rootScope.$on('loadProjects', $scope.refreshProjects);

        $scope.editProject = function() {
			$rootScope.$broadcast('showPresentationEditor', 1);
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

        $scope.renameProject = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/renameProject.html',
                controller: 'RenameProjectCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                if (data !== 'error'){
                    $scope.projects = [];
                    $scope.refreshProjects();
                }
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
            });
        };

        // $scope.deleteInfographic = function (id, index){
        //     var modalInstance = $modal.open({
        //         templateUrl: 'app/templates/deleteInfographic.html',
        //         controller: 'DeleteInfographicCtrl',
        //         windowClass: 'myModal'
        //     });
        //     modalInstance.result.then(function (data) {
        //         //$scope.infographics;
        //         $scope.infographics.forEach(function(element, index, array){
        //             if(element.id === id){
        //                 delete $scope.infographics[element];
        //             }
        //         });
        //         $scope.apply;
        //         $scope.infographics.splice(index, 1);
        //         //$modalInstance.close();
        //     });
        //
        // };
}]);
