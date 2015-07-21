angular.module('app.directives.textEditPanel', ['ngRoute'])
    .directive('textEditPanel', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/textEditPanel.html";
        return directive;
}]);
