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

            mgPage.setTitle(data.title);

            /*mgPage.bodyClass = data.bodyClass || '';*/
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

    /**
     * Configure base url for Restangular
     */
    mainModule.config(restangularConfig);

    restangularConfig.$inject = ['RestangularProvider'];
    function restangularConfig(RestangularProvider)
    {
        RestangularProvider.setBaseUrl('http://private-01b8b-mgsandbox.apiary-mock.com/');
    }

})();