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
            url: '/people/:group',
            abstract: true,
            templateUrl: 'app/people/people.html',
            controller: 'People',
            resolve: {
                currentGroup: ['$stateParams', function($stateParams) {
                    var group;

                    if ($stateParams.group === '')
                    {
                        group = 'all';
                    }
                    else
                    {
                        group = $stateParams.group;
                    }

                    return group;
                }]
            }
        };

        var peopleList = {
            name: 'people.list',
            url: '',
            views: {
                '':{
                    templateUrl: 'app/people/people.list.html',
                    controller: 'PeopleList as vm'
                },
                'leftsidebar': {
                    templateUrl: 'app/people/people.left.sidebar.html',
                    controller: 'PeopleLeftSidebar as vm'
                },
                'rightsidebar': {
                    templateUrl: 'app/people/people.right.sidebar.html',
                    controller: 'PeopleRightSidebar as vm'
                }
            },
            data: {
                title: 'mg-framework | people list (showcase)'
            }
        };

        $stateProvider
            .state(people)
            .state(peopleList);
    }
})();