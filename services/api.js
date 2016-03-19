angular.module('pokedox').factory('ApiService', function($http) {

  function getChunk() {
      return $http({url: 'http://pokeapi.co/api/v1/pokemon/?limit=12'});
  }

  return {

      getChunk: getChunk
  }
});
