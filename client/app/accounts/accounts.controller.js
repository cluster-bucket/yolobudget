'use strict';

angular.module('generatorAngularFullstackApp')
  .controller('AccountsCtrl', function ($scope, $http, socket, Auth, plaidLink) {
    $scope.accounts = [];

    var userId = Auth.getCurrentUser()._id;
    $http.get('/api/accounts?userId=' + userId)
    .success(function(accounts) {
      $scope.accounts = accounts;
      socket.syncUpdates('account', $scope.accounts);
    });

    $scope.connectAccount = function() {
      plaidLink.create(function (token) {
        console.log('token: ', token);
        // pass the token to your sever to retrieve an `access_token`
        // see https://github.com/plaid/link#step-3-write-server-side-handler
      }, function() {
        // User exit callback
        console.log('All done connecting');
      });

      var bankType = null;
      plaidLink.open(bankType);
    };

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
