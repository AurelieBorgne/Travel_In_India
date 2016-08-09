(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .controller('HomeCtrl', HomeCtrl);

  /** @ngInject */
  function HomeCtrl($rootScope, Photos) {
    var home = this;

    home.photos = Photos.getPhotosCity($rootScope.idSelectCity);

    home.clickPhoto = function(){
    	$rootScope.$broadcast('closeMenu');
    }
    $rootScope.$on('updateIdSelectCity', function(){
      	$rootScope.idSelectPhoto = 0;
    	home.photos = Photos.getPhotosCity($rootScope.idSelectCity);
    	$('#photoBox').css('background-image', 'url(../assets/images/'+home.photos.albumName+'/img'+$rootScope.idSelectPhoto+'.jpg)');
    });
    $rootScope.$on('updateIdSelectPhoto', function(){
    	$('#photoBox').css('background-image', 'url(../assets/images/'+home.photos.albumName+'/img'+$rootScope.idSelectPhoto+'.jpg)');
    });
  }
})();
