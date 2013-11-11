/**
 * Created by Deven on 13-11-10.
 */

'use strict';

var directiveModule = angular.module('uiRouterSampleDirectives', []);


directiveModule.directive('about',
    function() {
        return {
            restrict: 'EA',
            /*
            //replace: true,
            //transclude: true,
            scope: {
                author: '=author'
            },

            template:
                '<p class="lead">UI-Router Resources</p>' +
                '<ul>' +
                '<li><a href="https://github.com/angular-ui/ui-router/tree/master/sample">Source for this Sample</a></li>' +
                '<li><a href="https://github.com/angular-ui/ui-router">Github Main Page</a></li>' +
                '<li><a href="https://github.com/angular-ui/ui-router#quick-start">Quick Start</a></li>' +
                '<li><a href="https://github.com/angular-ui/ui-router/wiki">In-Depth Guide</a></li>' +
                '<li><a href="https://github.com/angular-ui/ui-router/wiki/Quick-Reference">API Reference</a></li>' +
                '</ul>'
             */

            templateUrl: 'partials/about.html'

            //template: '<h1>Hello directive!!!</h1>'
        };
    }
);

/**
 * Attention:
 * Here the name of directive, must be all lower case,
 * otherwise you will get nothing!!!
 *
 * Also the name inside the scope, must be all lower case,
 * cannot contain other characters like '_', '-', '.', etc...
 *
 * */
directiveModule.directive('menutips',
    function() {
        return {
            restrict: 'E',

            scope: {
                //contact: '=contact'
                contactid: '='
            },

            template: '<hr><small class="muted">Contact ID: {{ contactid }} </small>'
            //template: '<h1>Hello directive!!!</h1>'
        };
    }
);