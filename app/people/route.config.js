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
            templateUrl: 'app/people/people.html',
            controller: 'People'
        };

        var peopleList = {
            name: 'people.list',
            url: '',
            views: {
                '':{
                    templateUrl: 'app/people/people.list.html',
                    controller: 'PeopleList'
                },
                'leftsidebar': {
                    templateUrl: 'app/people/people.left.sidebar.html',
                    controller: 'PeopleLeftSidebar'
                },
                'rightsidebar': {
                    templateUrl: 'app/people/people.right.sidebar.html',
                    controller: 'PeopleRightSidebar'
                }
            },
            data: {
                title: 'People list'
            }
        };

        $stateProvider
            .state(people)
            .state(peopleList);
    }
})();