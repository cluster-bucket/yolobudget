'use strict';

angular.module('generatorAngularFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('transactions', {
        url: '/transactions',
        templateUrl: 'app/transactions/transactions.html',
        controller: 'TransactionsCtrl',
        authenticate: true
      });
  });
