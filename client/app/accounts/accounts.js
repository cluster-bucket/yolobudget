'use strict';

angular.module('generatorAngularFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('accounts', {
        url: '/accounts',
        templateUrl: 'app/accounts/accounts.html',
        controller: 'AccountsCtrl',
        authenticate: true
      });
  });
