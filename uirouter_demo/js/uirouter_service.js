/**
 * Created by Deven on 13-11-9.
 */


'use strict';

/* Services */

var serviceModule = angular.module('uiRouterSampleServices', []);

serviceModule.factory('contactsUtilService',
    [
        function () {

            return {

                // Util for finding an object by its 'id' property among an array
                findById: function findById(a, id) {
                    for (var i = 0; i < a.length; i++) {
                        if (a[i].id == id) return a[i];
                    }
                    return null;
                },

                // Util for returning a randomKey from a collection that also isn't the current key
                newRandomKey: function newRandomKey(coll, key, currentKey) {
                    var randKey;
                    do {
                        randKey = coll[Math.floor(coll.length * Math.random())][key];
                    } while (randKey == currentKey);
                    return randKey;
                }

            };
        }
    ]
);


// A RESTful factory for retreiving contacts from 'contacts.json'
serviceModule.factory('contactsDataService',
    [
        '$http', 'contactsUtilService',
        function ($http, contactsUtilService) {

            var path = 'data/contacts.json';
            var contacts = $http.get(path).then(function (resp) {
                return resp.data.contacts;
            });

            var factory = {};
            factory.all = function () {
                return contacts;
            };

            factory.get = function (id) {
                return contacts.then(function () {
                    return contactsUtilService.findById(contacts, id);
                })
            };

            return factory;
        }
    ]
);
