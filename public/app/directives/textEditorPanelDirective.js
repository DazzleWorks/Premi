angular.module('app.directives.textEditPanelDirective', ['ngRoute'])
    .directive('textEditPanelDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/textEditPanelView.html";
        return directive;
}]);
