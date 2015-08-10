'use strict';

/**
 * @description Service that allows to add a project on server
 * @param {json} object that contains projectName (the name of new project) and userID
 */

angular.module('app.services.project', ['ngRoute', 'ngResource'])


    .factory('projectService', ['$resource', function($resource) {

        return $resource('api/user/:user/project/:project');

    }]);
