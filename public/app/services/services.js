'use strict';

angular.module('app.services',
    [
        'ngRoute',
        'ngResource',
        'app.services.slideService',
        'app.services.loginService',
        'app.services.presentationServices',
        'app.services.slideServices'
    ]
);
