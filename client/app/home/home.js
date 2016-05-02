angular.module('fromAtoB.home', [])
  .controller('HomeController', function($scope, $http, Locations){

    //Working Autcomplete for States
    function loadStates() {
               var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                  Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                  Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                  Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                  North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                  South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                  Wisconsin, Wyoming';
               return allStates.split(/, +/g).map( function (state) {
                  return {
                     value: state.toLowerCase(),
                     display: state
                  };
               });
            }

    $scope.selectedItem = undefined;
    $scope.searchText = undefined;
    var states = loadStates();
    $scope.filteredStates = [];
    $scope.querySearch = function(searchText){
      $scope.filteredStates = states.filter(function(state){
        return state.value.indexOf(searchText) === 0;
      });
    }



    //Retrieve list of possible destinations
    $scope.cities = Locations.getCities();

    //To Do: Autocomplete for cities
    $scope.selectedCity = undefined;



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


    //User's selected trip
    $scope.userTrip = {};

  });