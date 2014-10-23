(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleLeftSidebar', PeopleLeftSidebar);

    PeopleLeftSidebar.$inject = ['logger', '$modal'];

    function PeopleLeftSidebar(logger, $modal) {
        /*jshint validthis: true */

        var modalSetting = {
            templateUrl: 'app/people/group.modal.html',
            controller: 'GroupModal',
            size: 'lg',
            resolve: {
                items: function () {
                    return ['item1', 'item2', 'item3'];
                }
            }
        };

        var vm = this;
        vm.title = 'Groups';
        vm.addGroup = addGroup;

        function addGroup() {
            var modalInstance = $modal.open(modalSetting);
        }

    }
})();