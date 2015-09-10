angular.module('app.controllers.ForgotPasswordCtrl', ['ngRoute'])

    .controller('ForgotPasswordCtrl', ['$scope', '$http', '$modalInstance', 'forgotPasswordService', function($scope, $http, $modalInstance, forgotPasswordService) {

        $scope.forgot_data = {
            email: ""
        };

        $scope.ok = function () {
            forgotPasswordService.save($scope.forgot_data);
            $modalInstance.close($scope.forgot_data.email);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
