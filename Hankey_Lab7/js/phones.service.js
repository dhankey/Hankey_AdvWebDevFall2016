/* 
 * This page is used to create our first
 * service. This is going to use built in
 * calls to help us out with the promises.
 */

(function()
{
    'use strict';
    angular
        .module('app')
        .factory('PhonesService', PhonesService);

    PhonesService.$inject = ['$http','REQUEST'];
    
    function PhonesService($http, REQUEST)
    {
        var url = REQUEST.Phones;
        var service = 
        { 
            'getPhones': getPhones,
            'findPhone': findPhone
        };
        return service;
        
        function getPhones()
        {
            return $http.get(url)
                    .then(getPhonesComplete, getPhonesFailed);
            
            function getPhonesComplete(response)
            { return response.data; }
            
            function getPhonesFailed(error)
            { return []; }
        }
        
        function findPhone(id)
        {
            return getPhones().then(function(data)
            { return findPhoneComplete(data); });
            
            function findPhoneComplete(data)
            {
                var results = {};
                
                angular.forEach(data, function(value,key)
                {
                    if(!results.length)
                    {
                        if(value.hasOwnProperty('id') && value.id === id)
                        { results = angular.copy(value); }
                    }
                }, results);
                
                return results;
            }
        }
    }
})();