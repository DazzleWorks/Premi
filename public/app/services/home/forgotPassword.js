'use strict';

/**
* @description Service that allows to save a slide of a project on server
* @param {json} data - json encoded data of a slide autogenerated from fabric.js
* @param {integer} idPrj - identify the project that contains the Presentation
* @param {integer} idPrs - identify the project that contains the Slide
* @param {integer} idSlide - identify the the Slide
*/
angular.module('app.services.forgotPassword', ['ngRoute', 'ngResource'])

    .factory('forgotPasswordService', ['$resource', function ($resource) {

        return $resource('/password/email');

    }]);
