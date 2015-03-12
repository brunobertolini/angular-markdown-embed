
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

            marked.setOptions({
                langPrefix: 'hljs ',
                highlight: function (code) {
                    hljs.initHighlightingOnLoad();
                    return hljs.highlightAuto(code).value;
                },
            });

            $http.get(attrs.load).then(function(data){
                content = data.data;

                element.html(marked(content));
            });

        }
    }
})();
