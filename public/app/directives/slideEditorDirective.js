angular.module('app.directives.slideEditorDirective', ['ngRoute'])
    .directive('slideEditorDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/slideEditorView.html";
        directive.transclude=true;
        return directive;
}]);
