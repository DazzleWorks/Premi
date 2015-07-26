angular.module('app.controllers.ForgotPasswordCtrl', ['ngRoute'])

    .controller('ForgotPasswordCtrl', ['$scope', '$http', '$modalInstance', function($scope, $http, $modalInstance) {

        $scope.forgot_data = {
            email: ""
        };

        $scope.ok = function () {
            $modalInstance.close($scope.forgot_data.email);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
