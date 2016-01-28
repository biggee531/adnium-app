'use strict';

angular.module('adniumAppApp.auth', [
  'adniumAppApp.constants',
  'adniumAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
