angular.module('app.controllers.RenameProjectCtrl', ['ngRoute'])

    .controller('RenameProjectCtrl', ['$scope', '$rootScope', '$http', '$modalInstance','projectService', function($scope, $rootScope, $http, $modalInstance, projectService) {

        $scope.project_data = {
            user: $scope.user,
            id: "",
            name: ""
        };

        $scope.ok = function () {
            var project = projectService.update({user:$rootScope.user, project:$rootScope.currentProject.id}, {name:$scope.project_data.name});
            project.$promise.then(
                function(data){
                    if(data.id !== '') {
                        $scope.project_data.id = data._id;
                        $modalInstance.close($scope.project_data);
                    }
                    else
                        $modalInstance.close("Project build failed");
                },
                function(data){
                    $modalInstance.close("error");
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
