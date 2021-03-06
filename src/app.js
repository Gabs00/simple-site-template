angular.module('personal', ['ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('home');
  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: './partials/home.html'
    })
    .state('about', {
      url:'/about',
      templateUrl: './partials/about.html'
    });
});
