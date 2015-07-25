angular.module('app.controllers.SignupCtrl', ['ngRoute'])

    .controller('SignupCtrl', ['$scope','$http', '$modalInstance', 'signupService', function($scope, $http, $modalInstance, signupService) {

        $scope.signup_data = {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        };

        $scope.checkFields = function(){
			var fieldsError = false;
		}

        $scope.ok = function () {
            var user = signupService($scope.signup_data).signup();
            $modalInstance.close(user);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
