(function() {
  'use strict';

  angular
    .module('travelInIndia')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

    // HASHBANG + html5Mode False
    $locationProvider.html5Mode(true);
    $urlRouterProvider.when('', '/').otherwise('/');

    $httpProvider.defaults.cache = false;
    if (!$httpProvider.defaults.headers.get) {
      $httpProvider.defaults.headers.get = {};
    }
    // disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = '0';

    $stateProvider

    // MAIN ABSTRACT
      .state('app', {
        url: '/',
        abstract: true,
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })

      // >> Home
      // ------------------------------------------------------------------------------------
      .state('app.home', {
        url: '',
        views: {
          'main': {
            templateUrl: 'app/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
          }
        }
      })
  }

})();
