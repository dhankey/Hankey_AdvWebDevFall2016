/*
 * We use this wrapper function to avoid creating
 * global variables. Angular.module function is
 * used to create new angular modules. Then the
 * config function is injected with $routeProvider
 * which it uses to set up a routing protocol.
 */
(function() 
{
    'use strict';
    angular
        .module('app', ['ngRoute'])
        .config(config);
    
    config.$inject = ['$routeProvider'];
    
    function config($routeProvider)
    {
       $routeProvider.when('/',
       {
           templateUrl: 'js/phone-list.template.html',
           controller: 'PhoneListController',
           controllerAs: 'vm'
       })
       .when('/phones/:phoneId',
       {
           templateUrl: 'js/phone-detail.template.html',
           controller: 'PhoneDetailController',
           controllerAs: 'vm'
       })
       .otherwise({ redirectTo: '/' });
    }
})();