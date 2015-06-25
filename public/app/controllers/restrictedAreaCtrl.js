angular.module('app.controllers.restrictedAreaCtrl', ['ngRoute'])

    .controller('restrictedAreaCtrl', ['$scope', function($scope) {

        $scope.menuItems = [
            {
                key: "myProjects",
                txt: "My Projects"
            },
            {
                key: "presentationEditor",
                txt: "Presentation Editor"
            },
            {
                key: "infographicEditor",
                txt: "Infographic Editor"
            }
        ];

        $scope.currentTab= 'myProjects';
        $scope.radioModel= 'myProjects';

        $scope.setCurrentTab= function(tab) {
            $scope.currentTab= tab;
        }

        $scope.isCurrentTab= function(tab) {
            return $scope.radioModel === tab;
        }

}]);
