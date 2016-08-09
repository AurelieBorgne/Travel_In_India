(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('MenuCtrl', MenuCtrl);

  /** @ngInject */
  function MenuCtrl($rootScope, Cities, $scope) {
    var menu = this;

    menu.isOpen = true;

    menu.cities = Cities.data;

    menu.toggleMenu = function(){
      menu.isOpen = !menu.isOpen;
    }

    menu.selectCity = function(idCity){
      $rootScope.idSelectCity = idCity;
      $rootScope.$broadcast('updateIdSelectCity');
    }
  }
})();
