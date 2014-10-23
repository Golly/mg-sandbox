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
        'blocks.logger', 'blocks.overlay', 'blocks.auth',
        /*
         * 3rd Party modules
         */
        'ui.router', 'ui.bootstrap'
    ]);
})();