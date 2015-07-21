'use strict';

angular.module('app.services',
    [
        'ngRoute',
        'ngResource',
        'app.services.slideService',
        'app.services.loginService',
        'app.services.signupService',
        'app.services.presentationServices',
        'app.services.slideServices'
    ]
);
