'use strict';

/**
 * @description Service that allows to add a project on server
 * @param {json} object that contains projectName (the name of new project) and userID
 */

angular.module('app.services.projects', ['ngRoute', 'ngResource'])

    .factory('projectsService', ['$http', '$resource', function ($http, $resource) {

        return function(data) {
            return $resource('api/user/:id/project', {}, {
                new: {
                    method: 'POST',
                    params: {
                        projectName: data.name
                    }
                }
            })
        };

    }]);
