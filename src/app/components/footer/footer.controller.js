(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('FooterCtrl', FooterCtrl);

  /** @ngInject */
  function FooterCtrl($rootScope) {
    var footer = this;


    footer.toggleFooter = function(){
    	$rootScope.openFooter = !$rootScope.openFooter;
    }

  }
})();
