<!--
 * resources/views/index.php
 * @author: Burlin Valerio
 * @date: 2015-06-20
 * Home page of the software Premi
 -->
<!doctype html>
<html ng-app="app" ng-controller="HomePageCtrl">
    <head>
        <meta charset="utf-8">
        <title>Premi - Presentation Editor</title>

        <script src="assets/libs/jquery-1.11.3.min.js" type="text/javascript"></script>

        <link rel="icon" href="assets/img/favicon.ico">

        <!-- custom -->
        <script src="assets/js/model.js"></script>
        <script src="app/scripts/scripts.js"></script>
        <script src="assets/libs/gridster/jquery.gridster.js"></script>
        <link href="assets/css/style.css" rel="stylesheet" type="text/css">

        <!-- css -->
        <link href="assets/libs/gridster/jquery.gridster.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/fileTree/fileTree.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/fontAwesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
        <link href="assets/libs/foundation/css/foundation.css" rel="stylesheet" type="text/css">

        <link href="assets/libs/angular-gridster/angular-gridster.min.css" rel="stylesheet" type="text/css">

        <!-- font -->
        <!-- <link href='http://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'> -->
        <!-- <link href='http://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet' type='text/css'> -->
        <!-- <link href='http://fonts.googleapis.com/css?family=Fredoka+One' rel='stylesheet' type='text/css'> -->
    </head>


    <body>
        <!-- TOP MENU BEGIN -->
        <div><top-bar-me/></top-bar-me></div>

        <!-- HOME PAGE -->
        <div ng-show= "home === 'true'"><home-page></home-page></div>

        <!-- AREA UTENTE -->
        <div ng-show= "home === 'false'"><restricted-area></restricted-area></div>


        <!-- script -->
        <script src="assets/libs/angular.min.js" type="text/javascript"></script>
        <script src="assets/libs/angular-route.min.js" type="text/javascript"></script>
        <script src="assets/libs/angular-resource.min.js" type="text/javascript"></script>
        <script src="assets/libs/angular-file-uploader/angular-file-upload.min.js" type="text/javascript"></script>
        <script src="assets/libs/fabric.js/dist/fabric.min.js" type="text/javascript"></script>
        <script src="assets/libs/fastclick.js" type="text/javascript"></script>
        <script src="assets/libs/foundation/js/foundation.js" type="text/javascript"></script>
        <script src="assets/libs/modernizr.js" type="text/javascript"></script>

        <!-- Gridster -->
        <script src="assets/libs/jquery.resize.js"></script>
        <script src="assets/libs/angular-gridster/angular-gridster.min.js"></script>

        <!-- Foundation ProgressBar -->
        <script src="assets/libs/foundation/js/mm-foundation-progressBar.js" type="text/javascript"></script>

        <!-- custom -->
        <script src="app/app.js" type="text/javascript"></script>
        <script src="app/controllers/controllers.js" type="text/javascript"></script>
        <script src="app/directives/directives.js" type="text/javascript"></script>
        <script src="app/filters/filters.js" type="text/javascript"></script>
        <script src="app/services/services.js" type="text/javascript"></script>

            <!-- controllers -->
            <script src="app/controllers/home/ForgotPasswordCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/home/GenericProjectCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/home/HomePageCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/home/LoginCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/home/ResetPasswordCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/home/SignupCtrl.js" type="text/javascript"></script>

            <script src="app/controllers/infographic/DeleteInfographicCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/infographic/InfographicEditorCtrl.js" type="text/javascript"></script>

            <script src="app/controllers/presentation/PresentationCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/presentation/PresentationEditorCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/presentation/PresentationStyleCtrl.js" type="text/javascript"></script>

            <script src="app/controllers/restrictedArea/RestrictedAreaCtrl.js" type="text/javascript"></script>

            <script src="app/controllers/slide/ImageCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/slide/TextCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/slide/SlideEditorCtrl.js" type="text/javascript"></script>

            <script src="app/controllers/user/MyAccountCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/user/MyProjectsCtrl.js" type="text/javascript"></script>

            <script src="app/controllers/project/DeleteProjectCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/project/NewProjectCtrl.js" type="text/javascript"></script>
            <script src="app/controllers/project/RenameProjectCtrl.js" type="text/javascript"></script>

            <!-- directives -->
            <script src="app/directives/home/genericProject.js" type="text/javascript"></script>
            <script src="app/directives/home/homePage.js" type="text/javascript"></script>

            <script src="app/directives/infographic/infographicEditor.js" type="text/javascript"></script>

            <script src="app/directives/main/topBar.js" type="text/javascript"></script>
            <script src="app/directives/main/topMenu.js" type="text/javascript"></script>

            <script src="app/directives/presentation/presentation.js" type="text/javascript"></script>
            <script src="app/directives/presentation/presentationEditor.js" type="text/javascript"></script>

            <script src="app/directives/restrictedArea/restrictedArea.js" type="text/javascript"></script>

            <script src="app/directives/slide/imageUpload.js" type="text/javascript"></script>
            <script src="app/directives/slide/slideEditor.js" type="text/javascript"></script>
            <script src="app/directives/slide/slideEditorPanel.js" type="text/javascript"></script>
            <script src="app/directives/slide/slideEditorPanelSpec.js" type="text/javascript"></script>
            <script src="app/directives/slide/textEditorPanel.js" type="text/javascript"></script>

            <script src="app/directives/user/myAccount.js" type="text/javascript"></script>
            <script src="app/directives/user/myProjects.js" type="text/javascript"></script>


            <!-- services -->
            <script src="app/services/home/facebook.js" type="text/javascript"></script>
            <script src="app/services/home/forgotPassword.js" type="text/javascript"></script>
            <script src="app/services/home/login.js" type="text/javascript"></script>
            <script src="app/services/home/logout.js" type="text/javascript"></script>
            <script src="app/services/home/search.js" type="text/javascript"></script>
            <script src="app/services/home/signup.js" type="text/javascript"></script>

            <script src="app/services/presentation/presentation.js" type="text/javascript"></script>
            <script src="app/services/presentation/presentationData.js" type="text/javascript"></script>
            <script src="app/services/presentation/presentationIndexUpdater.js" type="text/javascript"></script>


            <script src="app/services/project/project.js" type="text/javascript"></script>
            <script src="app/services/project/projects.js" type="text/javascript"></script>

            <script src="app/services/slide/image.js" type="text/javascript"></script>
            <script src="app/services/slide/index.js" type="text/javascript"></script>
            <script src="app/services/slide/slide.js" type="text/javascript"></script>

            <script src="app/services/user/user.js" type="text/javascript"></script>

    </body>
</html>
