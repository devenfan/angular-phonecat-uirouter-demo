'use strict';

/* Directives */


var phonecatDirectives = angular.module('phonecatDirectives', []);

phonecatDirectives.directive('about',
    [
        function() {
            return {
                restrict: 'E',
                //replace: true,
                //transclude: true,

                template: '<h1>about</h1>'
            };
        }
    ]
);


