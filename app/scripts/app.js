/* global app:true */
'use strict';

var app = angular.module('todoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foo/', {
        templateUrl: 'views/foo.html',
        controller: 'TodoCtrl'
      })
      .when('/contact/', {
        templateUrl: 'views/contact.html',
        controller: 'NavCtrl'
      })
      .when('/about/', {
        templateUrl: 'views/about.html',
        controller: 'NavCtrl'
      })
      .when('/bootstrap', {
        templateUrl: 'views/bootstrap.html',
        controller: 'BootstrapCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
