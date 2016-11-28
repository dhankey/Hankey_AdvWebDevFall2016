/*
 * In this page we create another function
 * which updates the app angular module and
 * adds a PhoneDetailController
 */

(function() 
{
    'use strict';
    angular
        .module('app')
        .controller('PhoneDetailController', PhoneDetailController);
    
    PhoneDetailController.$inject = ['$routeParams', 'PhonesService'];
    
    function PhoneDetailController($routeParams, PhonesService)
    {
        var vm = this;
        vm.phone = {};
        var id = $routeParams.phoneId;
        activate();
        
        function activate() 
        {
            PhonesService.findPhone(id).then(function(response)
            { vm.phone = response; });
        }
    }
    
})();

