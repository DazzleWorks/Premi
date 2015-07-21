angular.module('app.controllers.MyProjectsCtrl', ['ngRoute'])

    .controller('MyProjectsCtrl', ['$scope', function($scope) {
        $scope.Projects = [
            {
                Title: "MyProject1",
                sections: ["Presentation", "Infographics", "Modules"]
            }, {
                Title: "MyProject2",
                sections: ["Presentation", "Infographics", "Modules"]
            }, {
                Title: "MyProject3",
                sections: ["Presentation", "Infographics", "Modules"]
            }, {
                Title: "MyProject4",
                sections: ["Presentation", "Infographics", "Modules"]
            }, {
                Title: "MyProject5",
                sections: ["Presentation", "Infographics", "Modules"]
            }
        ];

}]);
