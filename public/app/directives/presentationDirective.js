angular.module('app.directives.presentationDirective', ['ngRoute'])
    .directive('presentationDirective', [function($scope) {
        var directive = {};
        directive.restrict = 'E';
        directive.templateUrl = "app/templates/presentationView.html";
        // directive.controller= 'presentationCtrl';
        directive.transclude= true;
        /*directive.compile= function() {
            console.log("Compiling test-directive");
            return {
                //pre: function() { console.log("Prelink"); },
                post: function() { console.log("Postlink");
                    //$scope.populate();
                }
            };
        };
      */
      return directive;
    }]);


    // .directive('revealInitialization', ['$compile', function($compile){
    //     return function(scope, element, attrs) {
    //         angular.element(document.getElementById('reveal-initialization')).append($compile(
    //             "// Full list of configuration options available at:
    //             // https://github.com/hakimel/reveal.js#configuration
    //             Reveal.initialize({
    //                 controls: true,
    //                 progress: true,
    //                 history: true,
    //                 center: true,
    //                 transition: 'slide', // none/fade/slide/convex/concave/zoom
    //
    //                 // Optional reveal.js plugins
    //                 dependencies: [
    //                     { src: 'assets/libs/reveal.js/lib/js/classList.js', condition: function() { return !document.body.classList; } },
    //                     { src: 'assets/libs/reveal.js/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    //                     { src: 'assets/libs/reveal.js/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
    //                     { src: 'assets/libs/reveal.js/plugin/highlight/highlight.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
    //                     { src: 'assets/libs/reveal.js/plugin/zoom-js/zoom.js', async: true },
    //                     { src: 'assets/libs/reveal.js/plugin/notes/notes.js', async: true }
    //                 ]
    //             });"
    //
    //         )(scope));
    //     }
    // }]);
