(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('DefaultLayout', DefaultLayout);

    DefaultLayout.$inject = ['$timeout', 'mgPage', 'logger'];

    function DefaultLayout($timeout, mgPage, logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = 'mg-framework';
        vm.busyMessage = 'Please wait ...';
        vm.isBusy = true;

        activate();

        function activate() {
            //logger.success(config.appTitle + ' loaded!', null);
//            Using a resolver on all routes or dataservice.ready in every controller
//            dataservice.ready().then(function(){
//                hideSplash();
//            });
            hideSplash();
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                mgPage.splash = false;
                logger.success('Loaded!', null);
            }, 1000);
        }
    }
})();
