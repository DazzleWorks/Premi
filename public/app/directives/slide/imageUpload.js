angular.module('app.directives.imageUpload', ['ngRoute','angularFileUpload'])
    .directive('imageUpload', function($q) {
        var slice = Array.prototype.slice;
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) return;

                // ngModel.$render = function() {}
                //
                element.bind('change', function(e) {
                //     var element = e.target;
                //     if(!element.value) return;
                //
                //     element.disabled = true;
                //     $q.all(slice.call(element.files, 0).map(readFile))
                //     .then(function(values) {
                //         if (element.multiple) ngModel.$setViewValue(values);
                //         else ngModel.$setViewValue(values.length ? values[0] : null);
                //         element.value = null;
                //         element.disabled = false;
                //     });

                    function readFile(file) {
                        var deferred = $q.defer();

                        var reader = new FileReader()
                        reader.onload = function(e) {
                            deferred.resolve(e.target.result);
                        }
                        reader.onerror = function(e) {
                            deferred.reject(e);
                        }
                        reader.readAsDataURL(file);

                        console.log(reader);
                        console.log(deferred.promise);
                        return deferred.promise;
                    }

                }); //change

            } //link

        }; //return
    })
    .directive('ngThumb', ['$window', function($window) {
        var helper = {
            support: !!($window.FileReader && $window.CanvasRenderingContext2D),
            isFile: function(item) {
                return angular.isObject(item) && item instanceof $window.File;
            },
            isImage: function(file) {
                var type =  '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };

        return {
            restrict: 'A',
            template: '<canvas/>',
            link: function(scope, element, attributes) {
                if (!helper.support) return;

                var params = scope.$eval(attributes.ngThumb);

                if (!helper.isFile(params.file)) return;
                if (!helper.isImage(params.file)) return;

                var canvas = element.find('canvas');
                var reader = new FileReader();

                reader.onload = onLoadFile;
                reader.readAsDataURL(params.file);

                function onLoadFile(event) {
                    var img = new Image();
                    img.onload = onLoadImage;
                    img.src = event.target.result;
                }

                function onLoadImage() {
                    var width = params.width || this.width / this.height * params.height;
                    var height = params.height || this.height / this.width * params.width;
                    canvas.attr({ width: width, height: height });
                    canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
                }
            }
        };
    }]);
