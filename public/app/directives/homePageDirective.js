angular.module('app.directives.homePageDirective', ['ngRoute'])
    .directive('homePageDirective', [function() {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "app/templates/homePageView.html";
        return directive;
}]);