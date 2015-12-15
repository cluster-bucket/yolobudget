'use strict';

angular.module('generatorAngularFullstackApp')
  .controller('TransactionsCtrl', function ($scope, $http, socket) {
    $scope.transactions = [];
    $scope.categories = [];

    $http.get('/api/categories').success(function(categories) {

      $scope.categories = categories.filter(function (category, index, array) {
        return (category.parentCategoryId && category.parent && category.parent.name !== 'Budget')
      });

      socket.syncUpdates('category', $scope.categories);
    });

    // TODO get by date and year
    // var date = new Date();
    // var month = date.getMonth();
    // var year = date.getYear();
    // ?year=' + year + '&month=' & month

    $http.get('/api/transactions').success(function(transactions) {
      $scope.transactions = transactions;
      socket.syncUpdates('transaction', $scope.transactions);
    });

    $scope.loadQif = function($content) {
      $scope.content = $content;
    }

    $scope.processQif = function () {
      if($scope.content === '') {
        return;
      }
      $http.post('/api/transactions/qif', {
        content: $scope.content
      });
    };

    $scope.updateCategory = function (transaction) {
      $http.put('/api/transactions/' + transaction._id, {
        categoryId: transaction.categoryId._id
      });
    };

    $scope.addTransaction = function() {
      if($scope.newTransaction === '') {
        return;
      }
      $http.post('/api/transactions', { name: $scope.newTransaction });
      $scope.newTransaction = '';
    };

    $scope.deleteTransaction = function(transaction) {
      $http.delete('/api/transactions/' + transaction._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('transaction');
      socket.unsyncUpdates('category');
    });
  });
