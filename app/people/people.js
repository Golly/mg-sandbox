(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('People', People);

    People.$inject = ['logger'];

    function People(logger) {

        /*jshint validthis: true */
        var vm = this;
        vm.neco = 'test';

    }
})();