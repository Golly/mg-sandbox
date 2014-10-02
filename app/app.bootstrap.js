(function() {
    'use strict';

    /**
     * Set page definition object
     */
    angular
        .module('app')
        .run(setPage);

    setPage.$inject = ['$rootScope', 'mgPage'];
    function setPage($rootScope, mgPage) {
        $rootScope.page = mgPage;
    }

})();