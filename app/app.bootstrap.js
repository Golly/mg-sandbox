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

})();