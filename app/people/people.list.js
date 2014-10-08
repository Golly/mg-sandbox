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
        vm.people = [
            {id:1, name: 'Nina Simonse', src: 'http://lorempixel.com/400/300/people/1/'},
            {id:2, name: 'Leila Duke', src: 'http://lorempixel.com/400/300/people/7/'},
            {id:3, name: 'Dina LaRay', src: 'http://lorempixel.com/400/300/people/9/'},
            {id:4, name: 'Sheena McWatt', src: 'http://lorempixel.com/400/300/people/5/'},
            {id:5, name: 'Samantha Fox', src: 'http://lorempixel.com/500/300/fashion/2/'},
            {id:6, name: 'Michael Fire', src:'http://lorempixel.com/500/300/fashion/6/'},
            {id:7, name: 'Dara Dammer', src:'http://lorempixel.com/500/300/fashion/7/'},
            {id:8, name: 'Axel Bee', src:'http://lorempixel.com/g/500/300/fashion/8/'},
            {id:9, name: 'Black Widow', src:'http://lorempixel.com/500/300/fashion/9/'}
        ];

    }
})();