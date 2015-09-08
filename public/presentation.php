<?php ?>
<!doctype html>
<html ng-app="app" ng-controller= "PresentationCtrl">
	<head>
		<meta charset="utf-8">
		<title>Premi - Presentation Editor</title>
        <style>
            div.slide-number{
                font-size:85% !important;
            }
        </style>
		<!-- <meta name="apple-mobile-web-app-capable" content="yes" />
		<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> -->

		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui">

		<link rel="stylesheet" href="assets/libs/reveal.js/css/reveal.css">

		<link rel="stylesheet" href="assets/libs/reveal.js/css/theme/<?php echo "$_GET[theme]"; ?>.css" id="theme">

		<link rel="stylesheet" href="assets/libs/reveal.js/lib/css/zenburn.css">

		<script src="assets/libs/reveal.js/lib/js/head.min.js"></script>
		<script src="assets/libs/reveal.js/js/reveal.js"></script>

		<!-- Printing and PDF exports -->
		<script>
			var link = document.createElement( 'link' );
			link.rel = 'stylesheet';
			link.type = 'text/css';
			link.href = window.location.search.match( /print-pdf/gi ) ? 'assets/libs/reveal.js/css/print/pdf.css' : 'assets/libs/reveal.js/css/print/paper.css';
			document.getElementsByTagName( 'head' )[0].appendChild( link );
		</script>
		{{setupPresentation(<?php echo "'$_GET[id]','$_GET[presentationId]','$_GET[user]'"; ?>);}}
    </head>

	<body>

        <!-- BEGIN PRESENTATION -->
        <div class="reveal">
			<div class="slides">
                <!-- <section ng-bind-html="slide.src">-->
				<section data-markdown>
				    <p></p>
				    <!-- <img src="assets/img/logo.png" width="50%"> -->
				</section>

                <section ng-repeat="columnId in columnsIds" >
                    <section ng-repeat="slide in (slidesSVG | filter:{x:columnId}:true) " ng-bind-html="slide.src">
                    <!--<section ng-repeat="y in this[slide]" ng-if="y !== 1" ng-bind-html="y.src"></section> -->
                    </section>
                </section>

			</div>
		</div>
        <!--END PRESENTATION -->

		<script type="text/javascript">
			// Full list of configuration options available at:
			// https://github.com/hakimel/reveal.js#configuration
			Reveal.initialize({
				controls: true,
				progress: true,
				history: true,
				center: true,
				transition: <?php echo "'$_GET[transition]'"?>,
				theme: <?php echo "'$_GET[theme]'"?>,

				// Optional reveal.js plugins
				dependencies: [
					{ src: 'assets/libs/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
					{ src: 'assets/libs/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'assets/libs/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
					{ src: 'assets/libs/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
					{ src: 'assets/libs/reveal.js/plugin/zoom-js/zoom.js', async: true },
					{ src: 'assets/libs/reveal.js/plugin/notes/notes.js', async: true }
				]
			});
		</script>

		<!-- script -->
		<script src="assets/libs/angular.min.js" type="text/javascript"></script>
		<script src="assets/libs/angular-route.min.js" type="text/javascript"></script>
		<script src="assets/libs/angular-resource.min.js" type="text/javascript"></script>
        <script src="assets/libs/angular-file-uploader/angular-file-upload.min.js" type="text/javascript"></script>
		<script src="assets/libs/fabric.js/dist/fabric.min.js" type="text/javascript"></script>
		<script src="assets/libs/fastclick.js" type="text/javascript"></script>
		<script src="assets/libs/foundation/js/foundation.js" type="text/javascript"></script>
		<script src="assets/libs/modernizr.js" type="text/javascript"></script>
		<script src="assets/libs/angular-gridster/angular-gridster.min.js" type="text/javascript"></script>


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


		<script src="app/services/project/project.js" type="text/javascript"></script>
		<script src="app/services/project/projects.js" type="text/javascript"></script>

		<script src="app/services/slide/image.js" type="text/javascript"></script>
		<script src="app/services/slide/index.js" type="text/javascript"></script>
		<script src="app/services/slide/slide.js" type="text/javascript"></script>

		<script src="app/services/user/user.js" type="text/javascript"></script>

    </body>
</html>
