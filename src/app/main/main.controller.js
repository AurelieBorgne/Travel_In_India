(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('MainCtrl', MainCtrl);

  /** @ngInject */
  function MainCtrl($rootScope) {
    var main = this;

    $rootScope.idSelectCity = 1;

    $rootScope.openFooter = false;

  }
})();
