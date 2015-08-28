angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', '$sce', '$window', '$document', 'projectsService', function($scope, $rootScope, $modal, $sce, $window, $document, projectsService) {

        $scope.projects = [];
        $rootScope.currentProject = {
            id: '',
            name: '',
            presentation: '',
            firstSlide: '',
            theme: 'sky',
            transition: 'slide',
            svg: ''
        };

        $scope.adjustSVGViewbox = function(svgString){    //da chiamare anche al resize della pagina
            // 1) find window's size
            // 2) set newWidth = SVGWidth * x / y
            // 3) replace the old size with the new size --> viewBox = "0 0 width height"

            var svgBoxWidth = document.getElementById('presentationMyProjectsSvg').offsetWidth;

            var originalWidth = $(svgString).attr("width");
            var originalHeight = $(svgString).attr("height");

            var parser = new DOMParser();
            var doc = parser.parseFromString(svgString, "image/svg+xml");

            doc.firstChild.setAttribute('width', svgBoxWidth);
            doc.firstChild.setAttribute('height', (svgBoxWidth * 2 / 3));
            doc.firstChild.setAttribute('class', $rootScope.currentGenericProject.theme);

            var svgString = doc.firstChild.outerHTML;

            return svgString;
        };

        var resetCurrentProject = function() {
            if ($scope.projects[0]) {
                console.log("reset");
                $rootScope.currentProject.id = $scope.projects[0].id;
                $rootScope.currentProject.name = $scope.projects[0].name;
                $rootScope.currentProject.presentation = $scope.projects[0].presentation;
                $rootScope.currentProject.firstSlide = $scope.projects[0].firstSlide;
                $rootScope.currentProject.theme = $scope.projects[0].theme;
                $rootScope.currentProject.transition = $scope.projects[0].transition;
                $rootScope.currentProject.svg = $scope.projects[0].svg;
            }
            else {
                console.log("noreset");
                $rootScope.currentProject.id = "";
                $rootScope.currentProject.name = "";
                $rootScope.currentProject.presentation = "";
                $rootScope.currentProject.firstSlide = "";
                $rootScope.currentProject.theme = "sky";
                $rootScope.currentProject.transition = "slide";
                $rootScope.currentProject.svg = "";
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
                    prj = $scope.projects[obj];
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
            $rootScope.currentProject.svg = $sce.trustAsHtml($scope.adjustSVGViewbox(obj.svg));
        };

        $scope.refreshProjects = function() {
            $scope.projects = [];
            var load = projectsService.query({user:$rootScope.user});
            load.$promise.then (
                function(data) {
                    for (var prj in data) {
                        if (isNaN(prj) === false) {
                            $scope.projects.push(
                                {
                                    id: data[prj].projectID,
                                    name: data[prj].name,
                                    presentation: data[prj].presentationID,
                                    firstSlide: data[prj].slideID,
                                    theme: data[prj].theme,
                                    transition: data[prj].transition,
                                    svg: data[prj].firstSvg
                                }
                            );
                        }
                    }
                    if (!$scope.projects[0])
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
            modalInstance.result.then(function(data) {
                if (data !== 'error'){
                    $scope.projects = [];
                    $scope.refreshProjects();
                }
            });
        };

        /**
         * call this function on window resize
         * @param: $scope.currentGenericProject
         * @param: $scope.SVGWidth
         * @param: $window, angular variable for get window size informations
         * @return: new SVG string
         */

        angular.element($window).bind('resize', function () {
            var svgBoxWidth = document.getElementById('presentationMyProjectsSvg').offsetWidth;
            document.getElementById('presentationMyProjectsSvg').getElementsByTagName('svg')[0].setAttribute('width', svgBoxWidth);
            document.getElementById('presentationMyProjectsSvg').getElementsByTagName('svg')[0].setAttribute('height', svgBoxWidth * 2 / 3);
        });

}]);
