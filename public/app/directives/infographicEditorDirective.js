angular.module('app.directives.infographicEditorDirective', ['ngRoute'])
    .directive('infographicEditorDirective', [function() {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "app/templates/infographicEditorView.html";
        return directive;
}]);
