(function () {
    'use strict';

    angular
        .module('bno.markdown', []);

})();

/* global marked: false */
/* global hljs: false */

(function () {
    'use strict';

    angular
        .module('bno.markdown')
        .directive('bnoMarkdown', bnoMarkdown);

    bnoMarkdown.$inject = ['$http'];

    function bnoMarkdown($http) {

        var directive = {
            restrict: 'EA',
            replace: true,
            link: link
        };

        return directive;

        //////////////////////

        function link(scope, element, attrs) {
            var content;
            var src = attrs.bnoMarkdown || attrs.load;

            marked.setOptions({
                langPrefix: 'hljs ',
                highlight: function (code) {
                    hljs.initHighlightingOnLoad();
                    return hljs.highlightAuto(code).value;
                },
            });

            $http.get(src).success(function(data){
                content = data;
                element.html(marked(content));
            });
        }
    }
})();
