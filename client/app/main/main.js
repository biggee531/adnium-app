'use strict';

angular.module('adniumAppApp')
  .config(function($stateProvider) {
    $stateProvider

      .state('main', {
            abstract:true,
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs:'main'

      })
        .state('main.campaigns', {
            url:'',
            parent:'main',
            templateUrl:'app/campaigns/campaigns.html'
        });

});
