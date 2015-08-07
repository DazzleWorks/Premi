angular.module('app.controllers.NewProjectCtrl', ['ngRoute'])

    .controller('NewProjectCtrl', ['$scope', '$rootScope', '$http', '$modalInstance','projectsService', function($scope, $rootScope, $http, $modalInstance, projectsService) {

        $scope.project_data = {
            user: $scope.user,
            id: "",
            name: ""
        };

        $scope.ok = function () {
            //var project = projectsService($scope.project_data).new();
            var projectData = {
                user: $scope.project_data.user,
                id: $scope.project_data.id,
                name: $scope.project_data.name
            };
            var project = projectsService.save({user:$scope.user},projectData);
            project.$promise.then(
                function(data){
                    if(data.id !== '') {
                        $scope.project_data.id = data.id;
                        $modalInstance.close($scope.project_data);
                    }
                    else
                        $modalInstance.close("Project build failed, server error");
                },
                function(data){
                    $modalInstance.close("error");
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
