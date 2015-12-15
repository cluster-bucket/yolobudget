'use strict';

angular.module('generatorAngularFullstackApp')
  .directive('categoryDropdown', function ($timeout) {

    return {
      templateUrl: 'components/category-dropdown/category-dropdown.html',
      restrict: 'E',
      scope: {
        cacheCompiled: '@',
        selectedItem: '=',
        options: '=',
        change: '&onChange'
      },
      link: function ($scope, $element, $attrs, $controller, $transclude) {

        // TODO cache the compiled HTML and clone it
        $scope.select = function(options) {
          angular.forEach(options, function(option) {
            option.selected = (option.value === $scope.selectedItem);
          });
        }

        $element.on('change', function(e) {
          var id = e.target.options[e.target.selectedIndex].value
          $scope.change({$selected: id});
        });

        // http://blog.brunoscopelliti.com/run-a-directive-after-the-dom-has-finished-rendering/
        $timeout(function () {
          $scope.select($element[0].querySelectorAll('option'));
        }, 0);

      }
    };
  });


/*

  // First attempt at caching
  // if ($scope.cacheCompiled) {
  //   if (cache[$scope.cacheCompiled]) {
  //     // console.log('accessing cache', cache[$scope.cacheCompiled]);
  //     $element.append(cache[$scope.cacheCompiled]);
  //   } else {
  //     compiled($scope, function(clonedElement) {
  //       console.log($element);
  //       cache[$scope.cacheCompiled] = clonedElement;
  //       // console.log('cached', $element);
  //       $element.append(clonedElement);
  //     });
  //   }
  // }

  // Second attempt at caching
  // Before directive return
  var template = [
    '<form>',
    '  <div class="form-group">',
    '    <select class="form-control">',
    '    </select>',
    '  </div>',
    '</form>'
  ].join('');

  var cache = {};

  // In link method
  $scope.cacheCompiled = $scope.cacheCompiled || 'default';

  if (!cache[$scope.cacheCompiled]) {
    var compiledOptions = [], compiledTemplate;

    $scope.options.forEach(function (option) {
      compiledOptions.push('<option value="' + option._id + '">' + option.name + '</option>');
    });

    compiledTemplate = template.replace('{{options}}', compiledOptions.join(''));
    cache[$scope.cacheCompiled] = compiledTemplate;
  }

  $scope.insert = function (options) {
    $element.append(options);
    if ($scope.cacheCompiled) {
      delete cache[$scope.cacheCompiled];
    }
  };

  // in $timeout
  $scope.insert(angular.element(cache[$scope.cacheCompiled]));
*/
