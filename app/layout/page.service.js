(function() {
    'use strict';

    angular.module('app.layout')
        .factory('mgPage', mgPage);

    function mgPage() {
        var layout = 'default';
        var bodyClass = '';
        var title = '';
        var splash = true;

        var service = {
            layout: layout,
            bodyClass: bodyClass,
            title: title,
            splash: splash,
            setTitle:setTitle
        };

        return service;
        ///////////////////

        function setTitle(tit) {
            if (angular.isDefined(tit)) {
                title = tit;
            }
        }

        function _isExplorer() {
            var ie = null;
            if (navigator.appName === 'Microsoft Internet Explorer') {
                var re  = new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})');
                if (!re.exec(navigator.userAgent)) {
                    ie = parseFloat(RegExp.$1);
                }
            }

            return ie;
        }
    }
})();