'use strict';

angular.module('generatorAngularFullstackApp')
  .controller('AccountsCtrl', function ($scope, $http, socket, Auth) {
    $scope.accounts = [];

    var userId = Auth.getCurrentUser()._id;
    $http.get('/api/accounts?userId=' + userId)
    .success(function(accounts) {
      $scope.accounts = accounts;
      socket.syncUpdates('account', $scope.accounts);
    });

    $scope.addAccount = function() {
      if($scope.newAccount === '') {
        return;
      }
      $http.post('/api/accounts', {
        name: $scope.newAccount,
        userId: Auth.getCurrentUser()._id
      });
      $scope.newAccount = '';
    };

    $scope.deleteAccount = function(account) {
      $http.delete('/api/accounts/' + account._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('account');
    });
  });
