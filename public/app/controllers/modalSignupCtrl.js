angular.module('app.controllers.modalSignupCtrl', ['ngRoute'])

    .controller('modalLoginCtrl', ['$scope','$http', '$modalInstance','signupFactory',  function($scope, $http, $modalInstance, signupFactory) {
      $scope.data = {
          username: "xxx",
          mail: "email@prova.it",
          firstname: "Prova",
          lastname: "Riprova",
          password: "password",
          password_confirmation: "password"
      };

        $scope.ok = function () {
            $http.post("http://localhost:8000/auth/register", $scope.data).
                    success(function(data, status, headers, config){
                        console.log(data);
                    });
            $modalInstance.close( /*loginFactory($scope.data)*/);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);
