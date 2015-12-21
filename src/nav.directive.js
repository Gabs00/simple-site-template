angular.module('personal')
.controller('NavController', function($scope){
  $scope.links = [
    { name:'home', value: 'Home', class:''},
    { name:'about', value: 'About', class:''}
  ];
})
.directive('navMenu', function(){
  return {
    restrict: 'EA',
    templateUrl:'./partials/links.html',
    link:function(scope, element, attr){
    }
  };
});
