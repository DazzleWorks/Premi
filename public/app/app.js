'use strict';

angular.module('app',
    [
        'ngRoute',
        'app.controllers',
        'app.directives',
        'app.filters',
        'app.services',
        'mm.foundation'
    ])

    .config(['$routeProvider', function($routeProvider) {

        $routeProvider.otherwise({
            redirectTo: '/'
        })
    }]);

    // applicazione.controller('setupCtrl', function ($scope) {
    //     $scope.resourcesPath=
    //         [
    //             // MAIN
    //             {
    //                 path:"app/controllers/controllers.js"
    //             },{
    //                 path:"app/directives/directives.js"
    //             },{
    //                 path:"app/filters/filters.js"
    //             },{
    //                 path:"app/services/services.js"
    //             },
    //
    //             // CONTROLLERS
    //             {
    //                 path:"app/controllers/infographicEditorCtrl.js"
    //             },{
    //                 path:"app/controllers/myProjectsCtrl.js"
    //             },{
    //                 path:"app/controllers/presentationEditorCtrl.js"
    //             },{
    //                 path:"app/controllers/sectionChooserCtrl.js"
    //             },{
    //                 path:"app/controllers/slideEditorCtrl.js"
    //             },{
    //                 path:"app/controllers/topBarCtrl.js"
    //             },{
    //                 path:"app/controllers/topMenuCtrl.js"
    //             },
    //
    //             // DIRECTIVES
    //             {
    //                 path:"app/directives/infographicEditorDirective.js"
    //             },{
    //                 path:"app/directives/menuPageSwitcherDirective.js"
    //             },{
    //                 path:"app/directives/myProjectsDirective.js"
    //             },{
    //                 path:"app/directives/presentationEditorDirective.js"
    //             },{
    //                 path:"app/directives/slideEditorPanelDirective.js"
    //             },{
    //                 path:"app/directives/textEditorPanelDirective.js"
    //             },{
    //                 path:"app/directives/topMenuDirective.js"
    //             }
    //         ]
    // });
