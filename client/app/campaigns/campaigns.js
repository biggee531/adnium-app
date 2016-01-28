'use strict';

angular.module('adniumAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('campaigns', {
        templateUrl: 'app/campaigns/campaigns.html',
        controller: 'CampaignsCtrl'
      });
  });
