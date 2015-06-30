angular.module('app.controllers.modalLoginCtrl', ['ngRoute'])

    .controller('modalLoginCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
        $scope.data = {
            text: ""
        };

        $scope.ok = function () {
            $modalInstance.close($scope.data.text);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
