angular.module('app.controllers.topMenuCtrl', ['ngRoute'])

    .controller('topMenuCtrl', ['$scope', function($scope) {
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

}]);
