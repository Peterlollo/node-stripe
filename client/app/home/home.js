angular.module('fromAtoB.home', [])
  .controller('HomeController', function($scope, $http, Locations){
    $scope.cities = Locations.getCities();
  });