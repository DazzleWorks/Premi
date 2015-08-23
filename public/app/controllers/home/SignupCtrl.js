/**
 * @file: public/app/controllers/home/SignUpCtrl.js
 * @author: DazzleWorks
 * @date: 2015-06-18
 * @description: Controller for user registration
 *
 * +---------+------------+---------------+----------------------------------------------------------------------+
 * | Version |     Date   |  Programmer   |   Modify                             | Description                   |
 * +---------+------------+---------------+--------------------------------------+-------------------------------+
 * |  0.1.0  | 2015-06-18 |  Ros Fabio    | LoginCtrl.ok(), LoginCtrl.cancel()   | create class                 |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 */
angular.module('app.controllers.SignupCtrl', ['ngRoute'])

    .controller('SignupCtrl', ['$scope','$http', '$modalInstance', 'signupService', function($scope, $http, $modalInstance, signupService) {

        $scope.signup_data = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            password_confirmation: "",
            username: ""
        };

        $scope.error = {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            username: ""
        };

        $scope.isCorrect = false;
        /**
         * try to register an user using loginService using signup service and if something goes wrong show the correct error
         * @param $scope.signup_data
         * @return void
         */
        $scope.ok = function () {
            $scope.isCorrect = true;
            var user = signupService.save($scope.signup_data);

            user.$promise.then(
                // signupService.signup() success
                function(data){

                    if (Array.isArray(data.email) === true) {
                        $scope.error.email = data.email[0];
                        $scope.isCorrect = false;
                    }
                    if (Array.isArray(data.firstName) === true) {
                        $scope.error.firstName = data.firstName[0];
                        $scope.isCorrect = false;
                    }
                    if (Array.isArray(data.lastName) === true) {
                        $scope.error.lastName = data.lastName[0];
                        $scope.isCorrect = false;
                    }
                    if (Array.isArray(data.password) === true) {
                        $scope.error.password = data.password[0];
                        $scope.isCorrect = false;
                    }
                    if (Array.isArray(data.username) === true) {
                        $scope.error.username = data.username[0];
                        $scope.isCorrect = false;
                    }

                    if ($scope.isCorrect === true) {
                        window.alert("Registrazione avvenuta con successo");
                        $modalInstance.close(data.username);
                    }
                },
                // signupService.signup() unsuccess
                function(data){
                    $modalInstance.close();
                });
        };
    /**
    * abort signup process
    * @return void
    */
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
