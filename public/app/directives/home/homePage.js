angular.module('app.directives.homePage', ['ngRoute'])
    .directive('homePage', [function() {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "app/templates/homePage.html";
        return directive;
}]);
