angular.module('app.directives.topMenuDirective', ['ngRoute'])

    .directive('topMenuDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/topMenuView.html";
        return directive;

}]);
