angular.module('app.directives.myProjects', ['ngRoute'])
    .directive('myProjects', [function() {
        var directive = {};
        directive.restrict = 'E'; /* restrict this directive to elements */
        directive.templateUrl = "app/templates/myProjects.html";
        return directive;
}]);
