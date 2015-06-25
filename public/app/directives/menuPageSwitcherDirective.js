angular.module('app.directives.menuPageSwitcherDirective',['ngRoute'])
    .directive('menuPageSwitcherDirective', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/pageSwitcherMenu.html";
        return directive;
}]);
