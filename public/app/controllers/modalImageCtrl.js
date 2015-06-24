angular.module('app.controllers.modalImageCtrl', ['ngRoute'])

    .controller('modalImageCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

        $scope.insertImage = function (imageId) {
            $modalInstance.close(imageId);
        };

        $scope.upload = function () {
            // APRIRE FINESTRA DI DIALOGO PER UPLOAD
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.imageList = [
            {
              url: 'http://i.imgur.com/wt4NRqA.jpg',
              id: '1',
              name: 'image 1'
            },
            {
              url: 'http://i0.wp.com/androidlive.it/wp-content/uploads/2014/08/image_new12.jpg',
              id: '2',
              name: 'image 2'
            },
            {
              url: 'http://tapatalk.imageshack.com/v2/14/11/07/37a5785343bb88779f06a63e23ab4eca.jpg',
              id: '3',
              name: 'image 3'
            }
        ]
    }]);
