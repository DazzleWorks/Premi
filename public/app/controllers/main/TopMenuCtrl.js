angular.module('app.controllers.TopMenuCtrl', ['ngRoute'])

    .controller('TopMenuCtrl', ['$scope', function($scope) {
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
