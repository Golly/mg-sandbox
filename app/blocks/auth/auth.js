/**
 * mgAuth - The authentication suite for AngularJS
 * @version v0.1.0 - 2014-09-29
 * @link http://marting.github.com
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function () {
    'use strict';

    var authModule = angular.module('mgAuth');

    /**
     * @ngdoc service
     * @name mgError401
     * @requires mgAuthNotifier, mgRequestStorage
     *
     * @description
     * If response has http code 401, new promise object is created, saved and auth required notification occur.
     *
     * Interceptor
     *
     * Requires the {@link mgAuth `mgAuth`} module to be installed.
     *
     * @example
     *
     * ```js
     * module.config(['$httpProvider', function($httpProvider){
     *  $httpProvider.responseInterceptors.push('mgError401');
     * }]);
     * ```
     */
    authModule.factory('mgError401' , error401);

    error401.$inject = ['$q', 'mgAuthNotifier', 'mgRequestStorage'];
    function error401($q, authNotifier, requestStorage) {

        return function (promise) {
            return promise.then(null, errorResponse(res));

            function errorResponse(res) {
                if (res.status !== 401) {
                    return promise;
                }

                var deferred = $q.defer();
                var req = {
                    config: res.config,
                    deferred: deferred
                };
                requestStorage.add(req);
                authNotifier.notifyRequired();

                return deferred.promise;
            }
        };

    }

    /**
     * @ngdoc service
     * @name mgAuthNotifier
     * @requires $rootScope
     *
     * @description
     * Encapsulate work with auth notifications
     *
     * Requires the {@link mgAuth `mgAuth`} module to be installed.
     *
     * @example
     *
     * ```js
     * function ExampleController($cookies) {
     *   // send notification
     *   authNotifier.notifyRequired();
     *   // recieve notification
     *   authNotifier.onRequired(scope, function(){
     *      scope.mode = true;
     *   });
     * }
     * ```
     */
    authModule.factory('mgAuthNotifier' , authNotifier);

    authNotifier.$inject = ['$rootScope'];
    function authNotifier($rootScope) {
        var service = {
            onRequired: onRequired,
            onConfirmed: onConfirmed,
            notifyRequired: notifyRequired,
            notifyConfirmed: notifyConfirmed
        };

        return service;
        ///////////////////

        function onRequired(scope, cb) {
            scope.$on('mgAuth:loginRequired', cb);
        }

        function onConfirmed(scope, cb) {
            scope.$on('mgAuth:loginConfirmed', cb);
        }

        function notifyRequired() {
            $rootScope.$broadcast('mgAuth:loginRequired');
        }

        function notifyConfirmed() {
            $rootScope.$broadcast('mgAuth:loginConfirmed');
        }
    }

    /**
     * @ngdoc service
     * @name mgRquestStorage
     *
     * @description
     * Save not authenticate request
     *
     * Requires the {@link mgAuth `mgAuth`} module to be installed.
     *
     * @example
     *
     * ```js
     * function ExampleController($cookies) {
     *   // get all requests
     *   mgRquestStorage.getAll();
     *   // add request
     *   mgRquestStorage.add(request);
     *   //clear request
     *   mgRquestStorage.clear();
     * }
     * ```
     */
    authModule.factory('mgRquestStorage' , requestStorage);

    function requestStorage() {
        var requests = [];

        var service = {
            clear: clear,
            getAll:getAll,
            add:add
        };

        return service;
        ///////////////////

        function clear() {
            requests = [];
        }

        function getAll() {
            return requests;
        }

        function add(req) {
            requests.push(reg);
        }
    }

    authModule.factory('mgAuth' , mgAuth);

    mgAuth.$inject = ['$http', '$window', 'mgAuthNotifier', 'mgRquestStorage'];
    function mgAuth($http, $window, authNotifier, requestStorage) {
        var tokenStorage = $window.sessionStorage;
        var tokenName = 'authToken';

        var service = {
            getToken: getToken,
            setToken: setToken,
            initHeaders: initHeaders,
            setHeader: setHeader,
            clearHeader: clearHeader,
            retry: retry,
            resendRequests: resendRequests,
            login: login
        };

        return service;
        ///////////////////

        function getToken() {
            return tokenStorage.getItem(tokenName);
        }

        function setToken(token) {
            tokenStorage.setItem(tokenName, token);
        }

        function initHeaders() {
            var token = getToken();
            if (!token) {
                return false;
            }
            setHeader(token);
        }

        function setHeader(token) {
            $http.defaults.headers.common.Authorization = 'Basic ' + token;
        }

        function clearHeader() {
            delete $http.defaults.headers.common.Authorization;
        }

        function retry(req) {
            $http(req.config).then(function(response) {
                req.deferred.resolve(response);
            });
        }

        function resendRequests() {
            var requests = requestStorage.getAll();

            for (var i = 0; i < requests.length; i++) {
                retry(requests[i]);
            }
            requestStorage.clear();
        }

        function login(email, password, successCb, errorCb) {
            successCb = successCb || function() {};
            errorCb = errorCb || function() {};

            var credentials = {
                email: email,
                password: password
            };

            clearHeader();

            //ToDo:volání /auth koncového bodu, předání credentials a získání tokenu
        }

    }
})();