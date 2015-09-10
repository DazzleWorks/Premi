angular.module('app.directives.imageUpload', ['ngRoute','angularFileUpload'])

    .directive('file', ['$parse', function($parse){
        return {
            scope: {
                file: "="
            },
            link: function(scope, element, attrs){

                // element.bind('change', function(event){
                //     var files = event.target.files;
                //     var file = files[0];
                //     scope.file = file ? file : undefined;
                //     scope.$apply();
                // });

                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.file = loadEvent.target.result;
                        });
                    }
                    reader.readAsDataURL(changeEvent.target.files[0]);

                });
            }
        };
    }]);
