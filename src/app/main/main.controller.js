(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($rootScope) {
    var main = this;

    $rootScope.openFooter = false;

  }
})();
