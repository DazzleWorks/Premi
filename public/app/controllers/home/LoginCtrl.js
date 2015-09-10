/**
* @file: public/app/controllers/home/LoginCtrl.js
* @author: DazzleWorks
* @date: 2015-06-20
* @description: Controller for user login
*
* +---------+------------+---------------+----------------------------------------------------------------------+
* | Version |     Date   |  Programmer   |   Modify                             | Description                   |
* +---------+------------+---------------+--------------------------------------+-------------------------------+
 * |  0.1.0  | 2015-06-18 |  Ros Fabio    | LoginCtrl.ok(), LoginCtrl.cancel()   | create class                 |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
 * |  1.0.0  | 2015-06-20 | Carraro Nicola| LoginCtrl.ok(), LoginCtrl.cancel()   | add forgot Password Feature  |
 * +---------+------------+---------------+--------------------------------------+------------------------------+
*/
angular.module('app.controllers.LoginCtrl', ['ngRoute'])

    .controller('LoginCtrl', ['$scope', '$http', '$modal', '$modalInstance', 'loginService', 'facebookService', function($scope, $http, $modal, $modalInstance, loginService, facebookService) {

        $scope.login_data = {
            username: "",
            password: ""
        };
        /**
         * open forgot Password View
         *
         * @return: void
         */
        $scope.forgotPassword = function () {
            var modalInstance = $modal.open({
                templateUrl: 'app/templates/forgotPassword.html',
                controller: 'ForgotPasswordCtrl',
                windowClass: 'myModal'
            });
            modalInstance.result.then(function (data) {
                $modalInstance.close();
            });
        };

        $scope.loginFacebook = function () {
            var face = facebookService.get();
            face.$promise.then(
                function(data) {
                    console.log("OK facebook");
                },
                function(data) {

                });
        };

        /**
         * try to authenticate an user using loginService
         * @param $scope.login_data
         * @return void
         */
        $scope.ok = function () {
            var user = loginService.save($scope.login_data);
            user.$promise.then(
                // loginService.login() success
                function(data){
                    if (data.username !== undefined)
                        $modalInstance.close(data.username);
                    else
                        $scope.error = 'Credenziali errate'
                },
                // loginService.login() unsuccess
                function(data){
                });
        };

        /**
         * abort login process
         * @return void
         */
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
