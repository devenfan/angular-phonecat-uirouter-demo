/**
 * Created by Deven on 13-11-9.
 */


'use strict';

/* Controllers */

var controllerModule = angular.module('uiRouterSampleControllers', ['ui.router', 'uiRouterSampleServices']);

/*
controllerModule.controller('ContactsCtrl',
    [
        '$scope', '$state', 'contacts', 'contactsUtilService',
        function ($scope, $state, contacts, contactsUtilService) {

            // Add a 'contacts' field in this abstract parent's scope, so that all
            // child state views can access it in their scopes.
            // Please note: scope inheritance is not due to nesting of states, but
            // rather choosing to nest the templates of those states.
            // It's normal scope inheritance.
            $scope.contacts = contacts;

            $scope.goToRandom = function () {
                var randId = contactsUtilService.newRandomKey($scope.contacts, "id", $state.params.contactId);

                // $state.go() can be used as a high level convenience method
                // for activating a state programmatically.
                $state.go('contacts.detail', { contactId: randId });
            };
        }
    ]
);
 */

controllerModule.controller('ContactsDetailCtrl',
    [
        '$scope', '$stateParams', 'contactsUtilService',
        function ($scope, $stateParams, contactsUtilService) {

            $scope.contact = contactsUtilService.findById($scope.contacts, $stateParams.contactId);

        }
    ]
);


controllerModule.controller('ContactsDetailItemCtrl',
    [
        '$scope', '$stateParams', '$state', 'contactsUtilService',
        function (  $scope,   $stateParams,   $state,   contactsUtilService) {

            $scope.item = contactsUtilService.findById($scope.contact.items, $stateParams.itemId);

            $scope.edit = function () {
                // Here we show off go's ability to navigate to a relative state.
                // Using '^' to go upwards and '.' to go down, you can navigate to
                // any relative state (ancestor or descendant).
                // Here we are going down to the child state 'edit' (full name of
                // 'contacts.detail.item.edit')
                $state.go('.edit', $stateParams);
            };
        }
    ]
);



controllerModule.controller('ContactsDetailItemEditCtrl',
    [
        '$scope', '$stateParams', '$state', 'contactsUtilService',
        function (  $scope,   $stateParams,   $state,   contactsUtilService) {

            $scope.item = contactsUtilService.findById($scope.contact.items, $stateParams.itemId);
            $scope.done = function () {
                // Go back up. '^' means up one. '^.^' would be up twice, to the grandparent.
                $state.go('^', $stateParams);
            };
        }
    ]
);

