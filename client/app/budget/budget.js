'use strict';

angular.module('generatorAngularFullstackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('budget', {
        url: '/budget',
        templateUrl: 'app/budget/budget.html',
        controller: 'BudgetCtrl',
        authenticate: true
      });
  });
