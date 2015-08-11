angular.module('app.controllers.DeleteProjectCtrl', ['ngRoute'])

    .controller('DeleteProjectCtrl', ['$scope', '$http', '$modalInstance', 'projectService', function($scope, $http, $modalInstance, projectService) {

        $scope.ok = function () {
            var del = projectService.delete({user:$scope.user, project:$scope.currentProject.id});
            del.$promise.then (
                function(data) {
                    $modalInstance.close('delete');
                },
                function(data) {
                    $modalInstance.close('error');
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
