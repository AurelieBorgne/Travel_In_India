(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
