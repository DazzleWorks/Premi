angular.module('app.directives.genericProject', ['ngRoute'])
    .directive('genericProject', [function() {
        var directive = {};
        directive.restrict = 'E';
        directive.transclude= true;
        directive.templateUrl = "app/templates/genericProject.html";
        return directive;
}]);
