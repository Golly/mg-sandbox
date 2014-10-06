(function() {
    'use strict';

    var mainModule = angular.module('app');

    /**
     * Set page definition object
     */
    mainModule.run(setPage);

    setPage.$inject = ['$rootScope', 'mgPage'];
    function setPage($rootScope, mgPage) {
        $rootScope.page = mgPage;
    }

    /**
     * For any unmatched url, redirect to /
     */
    mainModule.config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routerConfig($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
    }

    //mainModule.run(function($state) {});

})();