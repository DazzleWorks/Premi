angular.module('app.controllers.modalLoginCtrl', ['ngRoute'])

    .controller('modalLoginCtrl', ['$scope','$http', '$modalInstance','loginFactory',  function($scope, $http, $modalInstance, loginFactory) {
        $scope.data = {
            username: "xxx",
            password: "fabioros"
        };

        $scope.ok = function () {
            $http.post("http://localhost:8000/auth/login", $scope.data).
                    success(function(data, status, headers, config){
                        console.log(data);
                    });
            $modalInstance.close( /*loginFactory($scope.data)*/);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
