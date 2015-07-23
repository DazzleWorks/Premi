angular.module('app.directives.topBarMe', ['ngRoute'])
    .directive('topBarMe', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/topBar.html";
        directive.transclude= true;
        return directive;
}]);
