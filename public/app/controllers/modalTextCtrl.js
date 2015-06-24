angular.module('app.controllers.modalTextCtrl', ['ngRoute'])

    .controller('modalTextCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {
        $scope.text= 'this is an example text'; // DA IMPORTARE IL TESTO

        $scope.ok = function () {
            $modalInstance.close($scope.text);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
