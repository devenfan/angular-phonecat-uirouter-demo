/**
 * Created by Deven on 13-11-10.
 */

'use strict';

var directives = angular.module('uiRouterSampleDirectives', []);


directives.directive('about',
    function(){
        return {
            restrict: 'AE',
            scope: {

            },
            templateUrl: 'about.html'
        };
    }
);