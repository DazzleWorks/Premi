angular.module('app.controllers.ImageCtrl', ['ngRoute', 'angularFileUpload', 'mm.foundation.progressbar'])

    .controller('ImageCtrl', ['$scope', '$modalInstance', 'userMediaService', function($scope, $modalInstance, userMediaService) {

        $scope.filename = "";
        $scope.imageList = [];

        var loadImage = function () {
            var getImage = userMediaService.query({username:$scope.user});
            getImage.$promise.then (
                function(data) {
                    for (var i in data) {
                        if (isNaN(i) === false)
                            $scope.imageList.push(data[i]);
                    }
                },
                function(data) {
                });
        };

        loadImage();

        $scope.upload = function () {
        };

        $scope.insertImage = function (imageId) {
            $modalInstance.close(imageId);
        };

        $scope.uploadFile = function(files) {
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }])

    .controller('AppController', ['$scope', 'FileUploader', function($scope, FileUploader) {
        var uploader = $scope.uploader = new FileUploader({
            url: 'upload.php?user=' + $scope.user
        });

        // FILTERS

        uploader.filters.push({
            name: 'customFilter',
            fn: function(item /*{File|FileLikeObject}*/, options) {
                return this.queue.length < 10;
            }
        });

        var controller = $scope.controller = {
            isImage: function(item) {
                var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
            }
        };
    }]);
