<!--
 * resources/views/index.php
 * @author: Burlin Valerio
 * @date: 2015-06-20
 * Home page of the software Premi
 -->
<!doctype html>
<html ng-app="app" ng-controller="homePageCtrl">
    <head>
        <meta charset="utf-8">
        <title>Premi - Presentation Editor</title>

        <script src="assets/libs/jquery-1.11.3.min.js" type="text/javascript"></script>
        <!-- custom -->
        <script src="assets/js/model.js"></script>
        <script src="app/scripts/scripts.js"></script>
        <link href="assets/css/style.css" rel="stylesheet" type="text/css">

        <!-- css -->
        <link href="assets/libs/fileTree/fileTree.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/fontAwesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/foundation/css/foundation.css" rel="stylesheet" type="text/css">

        <!-- font -->
        <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'>
        <link href='http://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet' type='text/css'>
    </head>


    <body>
        <!-- TOP MENU BEGIN -->
        <div><top-bar-directive/></div>

        <!-- HOME PAGE -->
        <div ng-show= "home === 'true'"><home-page-directive/></div>

        <!-- AREA UTENTE -->
        <div ng-show= "restrictedArea === 'true'"><restricted-area-directive/></div>


        <!-- script -->
        <script src="assets/libs/angular.min.js" type="text/javascript"></script>
        <script src="assets/libs/angular-route.min.js" type="text/javascript"></script>
        <script src="assets/libs/angular-resource.min.js" type="text/javascript"></script>
        <script src="assets/libs/fabric.js/dist/fabric.min.js" type="text/javascript"></script>
        <script src="assets/libs/fastclick.js" type="text/javascript"></script>
        <script src="assets/libs/foundation/js/foundation.js" type="text/javascript"></script>
        <script src="assets/libs/modernizr.js" type="text/javascript"></script>

        <!-- custom -->
        <script src="app/app.js" type="text/javascript"></script>
        <script src="app/controllers/controllers.js" type="text/javascript"></script>
        <script src="app/directives/directives.js" type="text/javascript"></script>
        <script src="app/filters/filters.js" type="text/javascript"></script>
        <script src="app/services/services.js" type="text/javascript"></script>

        <script src="app/controllers/homePageCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/infographicEditorCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/modalImageCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/modalLoginCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/modalSignupCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/modalTextCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/myProjectsCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/presentationCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/presentationEditorCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/restrictedAreaCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/sectionChooserCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/slideEditorCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/topBarCtrl.js" type="text/javascript"></script>
        <script src="app/controllers/topMenuCtrl.js" type="text/javascript"></script>

        <script src="app/directives/homePageDirective.js" type="text/javascript"></script>
        <script src="app/directives/infographicEditorDirective.js" type="text/javascript"></script>
        <script src="app/directives/menuPageSwitcherDirective.js" type="text/javascript"></script>
        <script src="app/directives/myProjectsDirective.js" type="text/javascript"></script>
        <script src="app/directives/presentationDirective.js" type="text/javascript"></script>
        <script src="app/directives/presentationEditorDirective.js" type="text/javascript"></script>
        <script src="app/directives/restrictedAreaDirective.js" type="text/javascript"></script>
        <script src="app/directives/slideEditorDirective.js" type="text/javascript"></script>
        <script src="app/directives/slideEditorPanelDirective.js" type="text/javascript"></script>
        <script src="app/directives/slideEditorPanelSpecDirective.js" type="text/javascript"></script>
        <script src="app/directives/textEditorPanelDirective.js" type="text/javascript"></script>
        <script src="app/directives/topBarDirective.js" type="text/javascript"></script>
        <script src="app/directives/topMenuDirective.js" type="text/javascript"></script>

        <script src="app/services/slideService.js" type="text/javascript"></script>
        <script src="app/services/loginService.js" type="text/javascript"></script>
        <script src="app/services/signupService.js" type="text/javascript"></script>
        <script src="app/services/presentationServices.js" type="text/javascript"></script>
        <script src="app/services/slideServices.js" type="text/javascript"></script>

    </body>
</html>
