(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('MenuAlbumCtrl', MenuAlbumCtrl);

  /** @ngInject */
  function MenuAlbumCtrl($rootScope, Cities, Photos) {
    var menuAlbum = this;

    var cities = Cities.data;

    menuAlbum.selectCity = cities[($rootScope.idSelectCity-1)].title;

    menuAlbum.photos = Photos.getPhotosCity($rootScope.idSelectCity);
    $rootScope.idSelectPhoto = 0;

    menuAlbum.toggleMenu = function(){
      menuAlbum.isOpen = !menuAlbum.isOpen;
    }

    $rootScope.$on('closeMenu', function(){
      if(menuAlbum.isOpen) menuAlbum.isOpen = false;
    })

    $rootScope.$on('updateIdSelectCity', function(){
      menuAlbum.selectCity = cities[($rootScope.idSelectCity-1)].title;
      menuAlbum.photos = Photos.getPhotosCity($rootScope.idSelectCity);
    });

    menuAlbum.selectPhoto = function(idSelectPhoto){
      $rootScope.idSelectPhoto = idSelectPhoto;
      $rootScope.$broadcast('updateIdSelectPhoto');
    }


  }
})();
