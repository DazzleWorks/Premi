angular.module('app.controllers.ImageCtrl', ['ngRoute'])

    .controller('ImageCtrl', ['$scope', '$modalInstance', function($scope, $modalInstance) {

        $scope.filename = "";

        $scope.upload = function () {
            console.log($scope.filename);
        };

        $scope.insertImage = function (imageId) {
            $modalInstance.close(imageId);
        };


        $scope.uploadFile = function(files) {
            console.log(files);
            /*
            var fd = new FormData();
            //Take the first selected file
            fd.append("file", files[0]);

            $http.post(uploadUrl, fd, {
                withCredentials: true,
                headers: {'Content-Type': undefined },
                transformRequest: angular.identity
            }).success( console.log("ok");).error(console.log("ko"););
            */
        };

        // $scope.upload = function () {
        //     if (":file".files && ":file".files[0]) {
        //         var reader = new FileReader();
        //         // reader.onload = imageIsLoaded;
        //         reader.readAsDataURL(this.files[0]);
        //         console.log(reader);
        //         $scope.canvas.add(reader);
        //     }
        //     console.log("prova");
        // };

        // function imageIsLoaded(e) {
        //     $('#myImg').attr('src', e.target.result);
        // };


        // $scope.upload = function () {
        //     var reader = new FileReader();
        //     reader.onload = function (event) {
        //         var imgObj = new Image();
        //         imgObj.src = event.target.result;
        //         imgObj.onload = function () {
        //
        //             var image = new fabric.Image(imgObj);
        //             image.set({
        //                 left: 250,
        //                 top: 250,
        //                 angle: 20,
        //                 padding: 10,
        //                 cornersize: 10
        //             });
        //             //image.scale(getRandomNum(0.1, 0.25)).setCoords();
        //             $scope.canvas.add(image);
        //
        //             // end fabricJS stuff
        //         };
        //     };
        // };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.imageList = [
            {
              url: '/assets/users/img/Superheroes-circle-batman.png',
              name: 'batman'
            },
            {
              url: '/assets/users/img/Superheroes-circle-captain-america.png',
              name: 'captain-america'
            },
            {
              url: '/assets/users/img/Superheroes-circle-cat-woman.png',
              name: 'cat-woman'
            },{
              url: '/assets/users/img/Superheroes-circle-fantastic-four.png',
              name: 'fantastic-four'
            },
            {
              url: '/assets/users/img/Superheroes-circle-flash.png',
              name: 'flash'
            },
            {
              url: '/assets/users/img/Superheroes-circle-hulk-1.png',
              name: 'hulk'
            },
            {
              url: '/assets/users/img/Superheroes-circle-spiderman.png',
              name: 'spiderman'
            },
            {
              url: '/assets/users/img/Superheroes-circle-superman.png',
              name: 'superman'
            },
            {
              url: '/assets/users/img/Superheroes-circle-thor.png',
              name: 'thor'
            }
        ];
    }]);
