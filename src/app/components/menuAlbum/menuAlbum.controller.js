(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('MenuAlbumCtrl', MenuAlbumCtrl);

  /** @ngInject */
  function MenuAlbumCtrl($rootScope, Cities, Photos) {
    var menuAlbum = this;

    var cities = Cities.data;
    var slider = $('#slider');


    menuAlbum.selectCity = cities[($rootScope.idSelectCity-1)].title;

    menuAlbum.photos = Photos.getPhotosCity($rootScope.idSelectCity);
    $rootScope.idSelectPhoto = 0;

    var maxPhotos = menuAlbum.photos.nbImg;

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

    menuAlbum.prevSlide = function(){
      var lastSlide = $('#slider li:last-child'); 
      TweenMax.to(slider, 0.25,{left:0, ease:Sine.easeOut, onComplete:function(){
        slider.prepend(lastSlide);
        slider.css('left', '-193px');
      }});
    }

    menuAlbum.nextSlide = function(){
      var firstSlide = $('#slider li:first-child'); 
      TweenMax.to(slider, 0.25,{left:'-386px', ease:Sine.easeOut, onComplete:function(){
        slider.append(firstSlide);
        slider.css('left', '-193px');
      }});      
    }


  }
})();
