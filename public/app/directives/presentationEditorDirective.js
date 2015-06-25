angular.module('app.directives.presentationEditorDirective', ['ngRoute'])
    .directive('presentationEditorDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/presentationEditorView.html";
        return directive;
}]);
