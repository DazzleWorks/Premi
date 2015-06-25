angular.module('app.directives.slideEditorPanelDirective', ['ngRoute'])
    .directive('slideEditorPanelDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/slideEditorPanelView.html";
        directive.transclude=true;
        return directive;
}]);
