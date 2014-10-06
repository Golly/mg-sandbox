(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('mgLayout', mgLayout);

    function mgLayout() {
        var directive = {
            template: resolveTemplate,
            restrict: 'A',
            replace: true
        };

        return directive;

        function resolveTemplate(tElement, tAttrs) {
            var val = 'default';

            tAttrs.$observe('mgLayout', function (value) {
                val = value;
            });

            return 'app/layout/' + val + '.layout.html';
        }
    }

})();