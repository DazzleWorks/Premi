angular.module('app.directives.slideEditor', ['ngRoute'])
    .directive('slideEditor', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/slideEditor.html";
        directive.transclude=true;
        return directive;
}]);
