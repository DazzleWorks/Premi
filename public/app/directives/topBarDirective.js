angular.module('app.directives.topBarDirective', ['ngRoute'])
    .directive('topBarDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/topBarView.html";
        directive.transclude= true;
        return directive;
}]);
