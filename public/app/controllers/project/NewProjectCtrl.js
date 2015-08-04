angular.module('app.controllers.NewProjectCtrl', ['ngRoute'])

    .controller('NewProjectCtrl', ['$scope', '$http', '$modalInstance', function($scope, $http, $modalInstance) {

        $scope.ok = function () {
            $modalInstance.close($scope.projectName);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
