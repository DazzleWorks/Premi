angular.module('app.controllers.TextCtrl', ['ngRoute'])

    .controller('TextCtrl',['$scope','$modalInstance', function($scope, $modalInstance) {
        var data = {
            text: ""
        };

        var ok = function () {
            $modalInstance.close(data.text);
        };

        var cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
