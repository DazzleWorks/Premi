'use strict';

/**
* @description Service that allows to save a slide of a project on server
* @param {json} data - json encoded data of a slide autogenerated from fabric.js
* @param {integer} idPrj - identify the project that contains the Presentation
* @param {integer} idPrs - identify the project that contains the Slide
* @param {integer} idSlide - identify the the Slide
*/
angular.module('app.services.login', ['ngRoute', 'ngResource'])

    .factory('loginService', ['$http', '$resource', function ($http, $resource) {

        return function(data) {
            return $resource('/auth/login', {}, {
                login: {
                    method: 'POST',
                    params: {
                        // DA CORREGGERE BACK-END: no email --> si username
                        email: data.username,
                        password: data.password
                    }
                }
            })
        };

    }]);
