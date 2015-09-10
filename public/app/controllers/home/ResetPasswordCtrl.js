/**
 * @file: public/app/controllers/home/ResetPasswordCtrl.js
 * @author: DazzleWorks
 * @date: 2015-06-18
 * @description: Controller for passworo reset view
 *
 * +---------+------------+---------------+-----------------+----------------+
 * | Version |     Date   |  Programmer   |   Modify        |   Description  |
 * +---------+------------+---------------+-----------------+----------------+
 * |  0.1.0  | 2015-06-18 | Carraro Nicola| ok(), cancel()  | create class   |
 * +---------+------------+---------------+-----------------+----------------+
 */
angular.module('app.controllers.ResetPasswordCtrl', ['ngRoute'])

    .controller('ResetPasswordCtrl', ['$scope', '$http', '$modalInstance', function($scope, $http, $modalInstance) {

        $scope.reset_data = {
            email: "",
            password: "",
            rpassword: ""
        };
    /**
     * abort Reset Password process
     * @param $scope.reset_data
     * @return: void
     */
        $scope.ok = function () {
            $modalInstance.close();
        };
    /**
     * abort Reset Password process
     *
     * @return: void
     */
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
