'use strict';

/**
* @description Service that allows to upload and delete an image, or get all the images of a project
* @param {string} user - identify the user
* @param {integer} project - identify the project
* @param {integer} image - identify the image. It's null if I want t get all the images of the project
*/

angular.module('app.services.image', [])

    .factory('imageService', ['$resource', function($resource) {

        return $resource('user/:user/project/:project/image/:image', null,
            {
                'upload': {
                    method:'PUT'
                }
            });

    }]);
