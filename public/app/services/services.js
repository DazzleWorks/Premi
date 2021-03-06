'use strict';

angular.module('app.services',
    [
        'ngRoute',
        'ngResource',
        'app.services.facebook',
        'app.services.forgotPassword',
        'app.services.image',
        'app.services.index',
        'app.services.login',
        'app.services.logout',
        'app.services.presentation',
        'app.services.presentationData',
        'app.services.presentationIndexUpdater',
        'app.services.project',
        'app.services.projects',
        'app.services.search',
        'app.services.signup',
        'app.services.slide',
        'app.services.user'
    ]
);
