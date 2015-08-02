angular.module('app.controllers.SignupCtrl', ['ngRoute'])

    .controller('SignupCtrl', ['$scope','$http', '$modalInstance', 'signupService', function($scope, $http, $modalInstance, signupService) {

        $scope.signup_data = {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            password_confirmation: ""
        };

        $scope.checkFields = function(){
			var fieldsError = false;
		}

        $scope.ok = function () {
            var user = signupService($scope.signup_data).signup();
            user.$promise.then(
                // signupService.signup() success
                function(data){
                    $modalInstance.close(data.username);
                },
                // signupService.signup() unsuccess
                function(data){
                    $modalInstance.close();
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
