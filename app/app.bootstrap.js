(function() {
    'use strict';

    var mainModule = angular.module('app');

    /**
     * Set page definition object to rootScope
     */
    mainModule.run(setPage);

    setPage.$inject = ['$rootScope', 'mgPage'];
    function setPage($rootScope, mgPage) {
        $rootScope.page = mgPage;

        // by default set page data by state
        $rootScope.$on('$stateChangeSuccess', function(event, state) {
            var data = state.data;

            mgPage.bodyClass = data.bodyClass || '';
            mgPage.title = data.title || '';
        });

    }

    /**
     * For any unmatched url, redirect to /
     */
    mainModule.config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

})();