(function() {
    'use strict';

    var core = angular.module('app.core');

    core.config(toastrConfig);

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-full-width';
    }

    var config = {
        appErrorPrefix: '[mgError] ', //Configure the exceptionHandler decorator
        version: '0.1.0',
        apiBaseUrl: 'http://private-01b8b-mgsandbox.apiary-mock.com/'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    function configure ($logProvider) {
        // turn debugging off/on (no info or warn)
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
    }
})();