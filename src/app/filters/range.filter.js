(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .filter('range', rangeFilter);

  /** @ngInject */
  function rangeFilter() {
    return function(input, total) {
      total = parseInt(total);

      for (var i=0; i<total; i++) {
        input.push(i);
      }

      return input;
    };
  }
})();
