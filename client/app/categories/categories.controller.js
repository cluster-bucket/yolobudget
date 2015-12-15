'use strict';

angular.module('generatorAngularFullstackApp')
  .controller('CategoriesCtrl', function ($scope) {
    $scope.categories = [];

    $http.get('/api/categories').success(function(categories) {
      $scope.categories = categories;
      socket.syncUpdates('category', $scope.categories);
    });

    $scope.addCategory = function() {
      if($scope.newCategory === '') {
        return;
      }
      $http.post('/api/categories', { name: $scope.newCategory });
      $scope.newCategory = '';
    };

    $scope.deleteCategory = function(category) {
      $http.delete('/api/categories/' + category._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('category');
    });
  });
