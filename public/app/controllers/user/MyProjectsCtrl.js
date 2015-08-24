angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope','$rootScope', '$modal', 'projectsService', function($scope, $rootScope, $modal, projectsService) {

        $scope.projects = [];
        $rootScope.currentProject = {
            id: "",
            name: "",
            presentation: "",
            firstSlide: "",
            transition:"none",
            theme: "sky"
            // maxX: 0,
            // maxY: 0
        };

        var resetCurrentProject = function () {
            if($scope.projects[0]) {
                $rootScope.currentProject.id = $scope.projects[0].id;
                $rootScope.currentProject.name = $scope.projects[0].name;
                $rootScope.currentProject.presentation = $scope.projects[0].presentation;
                $rootScope.currentProject.firstSlide = $scope.projects[0].firstSlide;
                $rootScope.currentProject.transition = $scope.projects[0].transition;
                $rootScope.currentProject.theme = $scope.projects[0].theme;
                // $rootScope.currentProject.maxX = $scope.projects[0].maxX;
                // $rootScope.currentProject.maxY = $scope.projects[0].maxY;
            }else{
                $rootScope.currentProject.id = "";
                $rootScope.currentProject.name = "";
                $rootScope.currentProject.presentation = "";
                $rootScope.currentProject.firstSlide = "";
                $rootScope.currentProject.transition = "none";
                $rootScope.currentProject.theme = "slide";
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
                        if (isNaN(prj) === false)
                            $scope.projects.push(
                                {
                                    id: data[prj]._id,
                                    name: data[prj].name,
                                    presentation: data[prj].presentation._id.$id,
                                    firstSlide: data[prj].presentation.slides[0]._id.$id,
                                    transition:data[prj].presentation.transition,
                                    theme:data[prj].presentation.theme
                                    // maxX: data[prj].presentation.maxX,
                                    // maxY: data[prj].presentation.maxY
                                }
                            );
                    };
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

        /**
         * calculate the right size for SVG using the window size
         * @param: $scope.currentGenericProject
         * @param: $window, angular variable for get window size informations
         * @param: svgString, contains she SVG entirecode
         * @return: new SVG string
         */
        //$scope.adjustSVGViewbox = function(svgString){    //da chiamare anche al resize della pagina
        //    //1 calcolo dimensione finestra
        //
        //    //2 trovo larghezza in pixel ed altezza = larghezza*3/4 del ViewBox
        //
        //
        //    //3 se esiste l'attributo  __ viewBox="0 0 800 600" __ aggiorno le dimensioni, altrimenti lo aggiungo
        //    $scope.SVGWidth=document.getElementById('presentationFrontSvgContainer').clientWidth;
        //    var indexBeginWidth = svgString.lastIndexOf("width=\"")+7;
        //    var indexEndWidth=    svgString.indexOf(" height")-2;
        //    var indexBeginHeight = svgString.lastIndexOf("height=\"")+8;
        //    var indexEndHeight=    svgString.indexOf("\" xml:space")-1;
        //    $scope.originalWidth=svgString.substring(indexBeginWidth,indexEndWidth);
        //    $scope.originalHeight=svgString.substring(indexBeginHeight,indexEndHeight);
        //    svgString = svgString.replace("svg","svg viewBox='0 0 "+ $scope.originalWidth +" "+ $scope.originalHeight +" ' width='100%' height='"+ ($scope.SVGWidth * 3/4) +"' class='svg-content "+ $rootScope.currentGenericProject.theme +"' ");

            //console.log( $scope.originalHeight);
            /*
             *   PEZZO DA AGGIUNGERE

             width="156px" height="117.064px"
             viewBox="0 0 156 117.064"
             preserveAspectRatio="xMidYMid"


             * */
        //
        //    return svgString;
        //};



}]);
