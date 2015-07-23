angular.module('app.directives.slideEditorPanel', ['ngRoute'])
    .directive('slideEditorPanel', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/slideEditorPanel.html";
        directive.transclude=true;
        return directive;
}]);
