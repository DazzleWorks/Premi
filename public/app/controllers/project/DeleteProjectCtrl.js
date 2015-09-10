angular.module('app.controllers.DeleteProjectCtrl', ['ngRoute'])

    .controller('DeleteProjectCtrl', ['$scope', '$rootScope', '$http', '$modalInstance', 'projectService', function($scope, $rootScope, $http, $modalInstance, projectService) {

        $scope.ok = function () {
            var del = projectService.delete({user:$rootScope.user, project:$rootScope.currentProject.id});
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
