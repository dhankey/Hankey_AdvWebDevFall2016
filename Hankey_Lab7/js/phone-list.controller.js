/*
 * In this page we create another function
 * which updates the app angular module
 * 
 * This page has been updated to make an
 * ajax call and then store the data returned
 * into the phones array.
 */

(function() 
{
    'use strict';
    angular
        .module('app')
        .controller('PhoneListController', PhoneListController);
    
    PhoneListController.$inject = ['PhonesService'];
    
    function PhoneListController(PhonesService)
    {
        var vm = this;
        vm.phones = [];
        activate();
        
        function activate() 
        {
            PhonesService.getPhones().then(function(response)
            {
                vm.phones = response;
            });
        }
    }
})();