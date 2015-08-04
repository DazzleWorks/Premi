angular.module('app.controllers.RestrictedAreaCtrl', ['ngRoute'])

    .controller('RestrictedAreaCtrl', ['$scope','$rootScope', function($scope, $rootScope) {

        $scope.radioModel= 'myAccount';
        
         $rootScope.$on('showPresentationEditor', function () {
            $scope.radioModel= 'presentationEditor';
        });

}]);
