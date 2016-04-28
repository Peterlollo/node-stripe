angular.module('fromAtoB.home', [])
  .controller('HomeController', function($scope, $http, Locations){
    $scope.cities = Locations.getCities();
    $scope.userTrip = {};
    $scope.autoCompleteCities = function(){

    }
    $scope.selectMenu = {};
  });