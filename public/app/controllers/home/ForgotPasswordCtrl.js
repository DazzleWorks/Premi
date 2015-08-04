angular.module('app.controllers.ForgotPasswordCtrl', ['ngRoute'])

    .controller('ForgotPasswordCtrl', ['$scope', '$http', '$modalInstance', 'forgotPasswordService', function($scope, $http, $modalInstance, forgotPasswordService) {

        $scope.forgot_data = {
            email: ""
        };

        $scope.ok = function () {
            forgotPasswordService($scope.forgot_data).sendEmail();
            $modalInstance.close($scope.forgot_data.email);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
