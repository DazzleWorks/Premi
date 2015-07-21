angular.module('app.directives.presentationEditor', ['ngRoute'])
    .directive('presentationEditor', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/presentationEditor.html";
        return directive;
}]);
