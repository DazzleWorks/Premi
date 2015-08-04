angular.module('app.controllers.DeleteProjectCtrl', ['ngRoute'])

    .controller('DeleteProjectCtrl', ['$scope', '$http', '$modalInstance', function($scope, $http, $modalInstance) {

        $scope.ok = function () {
            $modalInstance.close(/*$scope.forgot_data.email*/);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
