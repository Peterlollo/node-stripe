angular.module('fromAtoB.home', [])
  .controller('HomeController', function($scope, $http, Locations){

    //Set date values for datepicker
    $scope.myDate = new Date();
    $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth(),
      $scope.myDate.getDate());
     $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 3,
      $scope.myDate.getDate());

    //Retrieve list of possible destinations
    $scope.cities = Locations.getCities();

    //AutoComplete possible destinations during user input
    $scope.autoCompleteCities = function(){
    }

    //Select Menu
    $scope.selectMenu = {};

    //User's selected trip
    $scope.userTrip = {};
  });