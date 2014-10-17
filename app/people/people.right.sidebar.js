(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleRightSidebar', PeopleRightSidebar);

    PeopleRightSidebar.$inject = ['logger'];

    function PeopleRightSidebar(logger) {

        /*jshint validthis: true */
        var vm = this;
        vm.name = 'Friends';

    }
})();