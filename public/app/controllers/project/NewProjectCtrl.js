angular.module('app.controllers.NewProjectCtrl', ['ngRoute'])

    .controller('NewProjectCtrl', ['$scope', '$rootScope', '$http', '$modalInstance','projectsService', function($scope, $rootScope, $http, $modalInstance, projectsService) {

        $scope.project_data = {
            user: $scope.user,
            id: "",
            name: ""
        };

        $scope.ok = function () {
            var project = projectsService.save({user:$scope.user}, $scope.project_data);
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
