angular.module('app.directives.myProjectsDirective', ['ngRoute'])
    .directive('myProjectsDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/myProjectsView.html";
        return directive;
}]);
