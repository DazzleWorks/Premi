angular.module('app.directives.myAccount', ['ngRoute'])
    .directive('myAccount', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/myAccount.html";
        return directive;
}]);
