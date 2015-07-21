angular.module('app.directives.infographicEditor', ['ngRoute'])
    .directive('infographicEditor', [function() {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "app/templates/infographicEditor.html";
        return directive;
}]);
