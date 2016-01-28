'use strict';

angular.module('adniumAppApp', [
  'adniumAppApp.auth',
  'adniumAppApp.admin',
  'adniumAppApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ngAnimate',
  'ui.router',
  'ui.router.stateHelper',
  'ui.bootstrap',
  'tableSort',
  'rzModule',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
