angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', 'projectsService', function($scope, $rootScope, $modal, projectsService) {

        $scope.projects = [];
        $rootScope.currentProject = {
            id: '',
            name: '',
            presentation: '',
            firstSlide: '',
            theme: 'sky',
            transition: 'slide'
            // svg: ''
        };

        var resetCurrentProject = function() {
            if ($scope.projects[0]) {
                $rootScope.currentProject.id = $scope.projects[0].id;
                $rootScope.currentProject.name = $scope.projects[0].name;
                $rootScope.currentProject.presentation = $scope.projects[0].presentation;
                $rootScope.currentProject.firstSlide = $scope.projects[0].firstSlide;
                $rootScope.currentProject.theme = $scope.projects[0].theme;
                $rootScope.currentProject.transition = $scope.projects[0].transition;
            }
            else {
                $rootScope.currentProject.id = "";
                $rootScope.currentProject.name = "";
                $rootScope.currentProject.presentation = "";
                $rootScope.currentProject.firstSlide = "";
                $rootScope.currentProject.theme = "sky";
                $rootScope.currentProject.transition = "slide";
            }
        };

        var findProjectById = function(id) {
            var prj = {
                id: '',
                name: '',
                presentation: ''
            };
            for (var obj in $scope.projects) {
                if ($scope.projects[obj].id === id)
                    prj = $scope.projects[k];
            }
            return prj;
        };

        $scope.setCurrentProject = function(id) {
            var obj = findProjectById(id);
            $rootScope.currentProject.id = obj.id;
            $rootScope.currentProject.name = obj.name;
            $rootScope.currentProject.presentation = obj.presentation;
            $rootScope.currentProject.firstSlide = obj.firstSlide;
            $rootScope.currentProject.theme = obj.theme;
            $rootScope.currentProject.transition = obj.transition;
        };

        $scope.refreshProjects = function() {
            $scope.projects = [];
            var load = projectsService.query({user:$rootScope.user});
            load.$promise.then (
                function(data) {
                    for (var prj in data) {
                        if (isNaN(prj) === false)
                            $scope.projects.push(
                                {
                                    id: data[prj]._id,
                                    name: data[prj].name,
                                    presentation: data[prj].presentation._id.$id,
                                    firstSlide: data[prj].presentation.slides[0]._id.$id,
                                    theme: data[prj].presentation.theme,
                                    transition: data[prj].presentation.transition,
                                    // svg: $sce.trustAsHtml($scope.adjustSVGViewbox($scope.userOfInterest.projects[obj].presentation.slides[0].svg))
                                }
                            );
                    }
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
            modalInstance.result.then(function(data) {
                if (data !== 'error'){
                    $scope.projects = [];
                    $scope.refreshProjects();
                }
            });
        };

}]);
