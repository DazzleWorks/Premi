angular.module('app.controllers.modalSignupCtrl', ['ngRoute'])

    .controller('modalSignupCtrl', ['$scope','$http', '$modalInstance', 'signupFactory', function($scope, $http, $modalInstance, signupFactory) {

        $scope.signup_data = {
            username: "",
            email: "",
            firstName: "",
            lastName: "",
            password: ""
        };

        $scope.checkFields = function(){
			$scope.fieldsError = false;
		}

        $scope.ok = function () {
            $scope.signup_ok = signupFactory.signup(/*$scope.signup_data*/);
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
