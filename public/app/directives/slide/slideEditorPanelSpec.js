angular.module('app.directives.slideEditorPanelSpec', ['ngRoute'])
    .directive('slideEditorPanelSpec', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/slideEditorPanelSpec.html";
        directive.transclude=true;
        return directive;
}]);
