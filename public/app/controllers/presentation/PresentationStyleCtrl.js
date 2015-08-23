angular.module('app.controllers.PresentationStyleCtrl', ['ngRoute'])

    .controller('PresentationStyleCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

        $scope.style = {
            transition: "none",
            theme: "sky"
        };

        $scope.transitions = [
            {name:"none", img:"../assets/img/transitions/transition4.png"},
            {name:"fade", img:"../assets/img/transitions/transition7.png"},
            {name:"slide", img:"../assets/img/transitions/transition3.png"},
            {name:"convex", img:"../assets/img/transitions/transition1.png"},
            {name:"concave", img:"../assets/img/transitions/transition2.png"},
            {name:"zoom", img:"../assets/img/transitions/transition8.png"}
        ];

        $scope.themes = [
            {name:"beige", backgroundColor:"#FAF7E4", textColor:"#F6D688", linkColor:"#8b743d"},
            {name:"black", backgroundColor:"#222222", textColor:"#FFFFFF", linkColor:"#8DCFFC"},
            {name:"blood", backgroundColor:"#222222", textColor:"#FFFFFF", linkColor:"#aa2233"},
            {name:"league", backgroundColor:"#282B2D", textColor:"#FFFFFF", linkColor:"#13DAEC"},
            {name:"moon", backgroundColor:"#002B36", textColor:"#FFFFFF", linkColor:"#268bd2"},
            {name:"night", backgroundColor:"#111111", textColor:"#FFFFFF", linkColor:"#e7ad52"},
            {name:"serif", backgroundColor:"#F0F1EB", textColor:"#000000", linkColor:"#51483D"},
            {name:"simple", backgroundColor:"#FFFFFF", textColor:"#000000", linkColor:"#00008B"},
            {name:"sky", backgroundColor:"#B9DFE8", textColor:"#000000", linkColor:"#3b759e"},
            {name:"solarized", backgroundColor:"#FDF6E3", textColor:"#768789", linkColor:"#268bd2"},
            {name:"white", backgroundColor:"#FFFFFF", textColor:"#000000", linkColor:"#2a76dd"}
        ];

        $scope.setTransition = function (name) {
            $scope.style.transition = name;
        };

        $scope.setTheme = function (name) {
            $scope.style.theme = name;
        };

        $scope.ok = function () {
            $modalInstance.close($scope.style);
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    }]);
