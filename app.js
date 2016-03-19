var app = angular.module('pokedox', [
  'ui.router'
]);

 angular.module('pokedox').config(function($urlRouterProvider,  $stateProvider) {

  $urlRouterProvider.otherwise("main");
 //
 // Now set up the states
 $stateProvider
   .state('main', {
     url: "/main",
     templateUrl: "templates/main.html",
     controller: "MainCtrl"
   });
});
