(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleLeftSidebar', PeopleLeftSidebar);

    PeopleLeftSidebar.$inject = ['logger'];

    function PeopleLeftSidebar(logger) {

        /*jshint validthis: true */
        var vm = this;
        vm.toto = 'test';

    }
})();