angular.module('pokedox').controller('MainCtrl', ['$scope', 'ApiService', function($scope, ApiService) {
  $scope.pokemons = [
    {name: "name1"},
    {name: "name2"},
    {name: "name3"},
  ]

  ApiService.getChunk().then(function(res) {
    console.log(res.data);
    $scope.pokemons = res.data.objects;

    angular.forEach($scope.pokemons)
  })
}]);
