'use strict';

angular.module('app.services',
    [
        'ngRoute',
        'ngResource',
        'app.services.forgotPassword',
        'app.services.login',
        'app.services.logout',
        'app.services.presentation',
        'app.services.project',
        'app.services.projects',
        'app.services.signup',
        'app.services.slide',
        'app.services.user'
    ]
);
