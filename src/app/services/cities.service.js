(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .factory('Cities', CitiesService);

  /** @ngInject */ // Remplacer par un webservice -> renvoie les albums nommé par villes de la BDD
  function CitiesService() {
    return{

      data:[
        {
          'title': 'AGRA',
          'id': 1
        },
        {
          'title': 'JAISALMER',
          'id': 2
        },
        {
          'title': 'JODHPUR',
          'id': 3
        },
        {
          'title': 'JAÏPUR',
          'id': 4
        },
        {
          'title': 'UDAÏPUR',
          'id': 5
        },
        {
          'title': 'VARANASI',
          'id': 6
        },
        {
          'title': 'DELHI',
          'id': 7
        }
      ]

    }

  }
})();
