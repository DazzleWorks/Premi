angular.module('app.controllers.NewProjectCtrl', ['ngRoute'])

    .controller('NewProjectCtrl', ['$scope', '$rootScope', '$http', '$modalInstance','projectsService', function($scope, $rootScope, $http, $modalInstance, projectsService) {

        var project_data = {
            user: $scope.user,
            id: "",
            name: ""
        };

        $scope.ok = function () {

            project_data.name = $scope.projectName;

            var project = projectsService(project_data).new();
            project.$promise.then(
                function(data){
                    if(data.id !== '') {
                        project_data.id = data.id;
                        $modalInstance.close(project_data);
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
