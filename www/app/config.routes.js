'use strict';

angular.module('hello4')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', { templateUrl: 'app/home/home.html', controller: 'HomeController' })
            .otherwise({ redirectTo: '/' });
    } ]);