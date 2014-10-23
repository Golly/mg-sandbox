(function() {
    'use strict';

    angular
        .module('app.people')
        .controller('GroupModal', GroupModal);

    GroupModal.$inject = ['$scope', '$modalInstance', 'items'];

    function GroupModal($scope, $modalInstance, items) {

        console.log(items);

        $scope.selected = {
            //item: $scope.items[0]
        };

        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }

})();