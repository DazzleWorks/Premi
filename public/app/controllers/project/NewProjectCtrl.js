angular.module('app.controllers.NewProjectCtrl', ['ngRoute'])

    .controller('NewProjectCtrl', ['$scope', '$rootScope', '$http', '$modalInstance','projectsService', function($scope, $rootScope, $http, $modalInstance, projectsService) {

        var project_data = {
            name: ""
        };

        $scope.ok = function () {

            project_data.name = $scope.projectName;

            var project = projectsService(project_data).new({id:$scope.user});
            project.$promise.then(
                function(data){
                    if(data.response === true)
                        $modalInstance.close(data);
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
