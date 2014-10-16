(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleList', PeopleList);

    PeopleList.$inject = ['$q', 'Restangular', 'logger'];

    function PeopleList($q, Restangular, logger) {
        var peopleResource = Restangular.all('people');

        /*jshint validthis: true */
        var vm = this;
        vm.toto = 'test';
        vm.people = [];

        activate();

        function activate() {
            var promises = [getPeople()];

            return $q.all(promises).then(function() {
                logger.info('Activated People View');
            });
        }

        function getPeople() {
            return peopleResource.getList().then(function(data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();