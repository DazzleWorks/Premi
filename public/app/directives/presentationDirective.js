angular.module('app.directives.presentationDirective', ['app.controllers.presentationCtrl','ngRoute'])
    .directive('presentationDirective', [function() {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "app/templates/presentationView.html";
        //directive.controller='presentationCtrl';
        directive.transclude= true;
        /*directive.compile= function() {
            console.log("Compiling test-directive");
            return {
                //pre: function() { console.log("Prelink"); },
                post: function() { console.log("Postlink");
                    //$scope.populate();
                }
            };
        };
      */
        return directive;
}]);
