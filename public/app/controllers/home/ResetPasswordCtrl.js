angular.module('app.controllers.ResetPasswordCtrl', ['ngRoute'])

    .controller('ResetPasswordCtrl', ['$scope', '$http', '$modalInstance', function($scope, $http, $modalInstance) {

        $scope.reset_data = {
            email: "",
            password: "",
            rpassword: ""
        };

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
