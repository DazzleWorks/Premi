angular.module('app.controllers.modalLoginCtrl', ['ngRoute'])

    .controller('modalLoginCtrl', ['$scope', '$modalInstance','loginFactory',  function($scope, $modalInstance, loginFactory) {
        $scope.data = {
            username: "",
            password: ""
        };

        $scope.ok = function () {

            $modalInstance.close( loginFactory($scope.data.text, $scope.data.password));
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
