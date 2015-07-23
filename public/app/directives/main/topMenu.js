angular.module('app.directives.topMenu', ['ngRoute'])
    .directive('topMenu', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/topMenu.html";
        return directive;

}]);
