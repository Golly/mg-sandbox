(function() {
    'use strict';

    angular.module('app.core', [
        /*
         * Angular modules
         */
        'ngAnimate', 'ngSanitize', 'restangular',
        /*
         * Our reusable cross app code modules
         */
        'blocks.logger',
        /*
         * 3rd Party modules
         */
        'ui.router',
    ]);
})();