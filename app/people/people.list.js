(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleList', PeopleList);

    PeopleList.$inject = ['$q', 'Restangular', 'logger', 'currentGroup'];

    function PeopleList($q, Restangular, logger, currentGroup) {
        var peopleResource = Restangular.all('people');

        /*jshint validthis: true */
        var vm = this;
        vm.toto = 'test';
        vm.people = [];

        activate();

        function activate() {
            var promises = [getPeople(currentGroup)];

            return $q.all(promises).then(function() {
                //logger.info('Activated People View');
            });
        }

        function getPeople(group) {
            var param = {};

            if (group !== 'all') {
                param.group = group;
            }

            return peopleResource.getList(param).then(function(data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();