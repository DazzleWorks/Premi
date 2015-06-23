angular.module('app.directives.slideEditorPanelSpecDirective', ['ngRoute'])
    .directive('slideEditorPanelSpecDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/slideEditorPanelSpecView.html";
        directive.transclude=true;
        return directive;
}]);
