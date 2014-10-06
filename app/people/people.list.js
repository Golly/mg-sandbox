(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleList', PeopleList);

    PeopleList.$inject = ['logger'];

    function PeopleList(logger) {

        /*jshint validthis: true */
        var vm = this;
        vm.toto = 'test';

    }
})();