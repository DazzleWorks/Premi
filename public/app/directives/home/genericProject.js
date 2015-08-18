angular.module('app.directives.genericProject', ['ngRoute'])
    .directive('genericProject', [function() {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "app/templates/genericProject.html";
        return directive;
}]);
