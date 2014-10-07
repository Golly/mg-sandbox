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
        vm.bricks = [
            {name: 'test', src: 'http://lorempixel.com/250/300/people/'},
            {name: 'lide', src: 'http://lorempixel.com/250/400/people/'},
            {name: 'lide3', src: 'http://lorempixel.com/250/250/people/'},
            {name: 'lide4', src: 'http://lorempixel.com/250/160/people/'},
            {name: 'lide5', src: 'http://lorempixel.com/250/500/people/'},
            {name: 'test6', src: 'http://lorempixel.com/250/340/people/'},
            {name: 'lide7', src: 'http://lorempixel.com/250/420/people/'},
            {name: 'lide8', src: 'http://lorempixel.com/250/210/people/'},
            {name: 'lide9', src: 'http://lorempixel.com/250/250/people/'},
            {name: 'lide10', src: 'http://lorempixel.com/250/405/people/'},
            {name: 'test11', src: 'http://lorempixel.com/250/325/sports/'},
            {name: 'lide12', src: 'http://lorempixel.com/250/420/people/'},
            {name: 'lide13', src: 'http://lorempixel.com/250/210/people/'},
            {name: 'lide14', src: 'http://lorempixel.com/250/250/people/'},
            {name: 'lide15', src: 'http://lorempixel.com/250/405/people/'}
        ];

    }
})();