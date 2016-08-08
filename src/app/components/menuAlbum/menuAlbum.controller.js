(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('MenuAlbumCtrl', MenuAlbumCtrl);

  /** @ngInject */
  function MenuAlbumCtrl($rootScope, Cities) {
    var menuAlbum = this;

    var cities = Cities.data;

    menuAlbum.selectCity = cities[($rootScope.idSelectCity-1)].title;


  }
})();
