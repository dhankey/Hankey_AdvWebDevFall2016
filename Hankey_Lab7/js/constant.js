/* 
 * This page updates our module app again
 * so it has a constant with 'Phones' getting
 * data from a specified json page
 */

(function()
{
    'use strict';
    angular
        .module('app')
        .constant('REQUEST',
        {
            'Phones' : './data/phones.json'
        });
})();