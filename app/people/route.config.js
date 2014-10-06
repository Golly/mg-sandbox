(function() {
    'use strict';

    angular
        .module('app.people')
        .config(peopleRoute);

    // appRun.$inject = ['$stateProvider']

    /* @ngInject */
    function peopleRoute($stateProvider) {
        var people = {
            name: 'people',
            url: '/people',
            abstract: true,
            templateUrl: 'people.html',
            controller: 'People'
        };

        var peopleList = {
            name: 'people.list',
            url: '',
            templateUrl: 'people.list.html',
            controller: 'PeopleList'
        };

        $stateProvider
            .state(people)
            .state(peopleList);
    }
})();