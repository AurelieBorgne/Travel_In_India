(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .factory('Photos', PhotosService);

  /** @ngInject */ // Remplacer par un webservice -> renvoie les photos de l'album sélectionné
  function PhotosService() {

    var photosService = {}
    
    photosService.getPhotosCity = function(idCity){
      var data = {};
      //AGRA
      if(idCity == 1){
        data = {
          'albumName': 'agra',
          'nbImg': 12
        }
      } else if(idCity == 2){
        data = {
          'albumName': 'jaisalmer',
          'nbImg': 7
        }        
      }
      console.log('idCity : ' + idCity);
      return data;

    }

    return photosService;

  }
})();
