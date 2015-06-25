angular.module('app.directives.restrictedAreaDirective', ['ngRoute'])
    .directive('restrictedAreaDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/restrictedAreaView.html";
        directive.transclude= true;
        return directive;
}]);
