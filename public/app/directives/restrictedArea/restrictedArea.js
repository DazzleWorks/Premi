angular.module('app.directives.restrictedArea', ['ngRoute'])
    .directive('restrictedArea', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/restrictedArea.html";
        directive.transclude= true;
        return directive;
}]);
