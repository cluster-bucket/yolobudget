'use strict';

// Usage:
//
// Category.get().then(function (categories) {
//   $scope.categories = categories;
// });
angular.module('generatorAngularFullstackApp')
  .service('Category', function ($rootScope, $http, $q, Auth) {
    var categories;

    this.get = function(callback) {
      var cb = callback || angular.noop;
      var deferred = $q.defer();

      if (categories) {
        return deferred.resolve(categories);
      }

      var userId = Auth.getCurrentUser()._id

      $http.get('/api/categories?userId=' + userId)
      .success(function(data) {
        categories = data;
        deferred.resolve(data);
        return cb();
      })
      .error(function(err) {
        deferred.reject(err);
        return cb(err);
      }.bind(this));

      return deferred.promise;
    };
  });
