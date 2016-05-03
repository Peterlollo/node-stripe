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
    var locations;
    if(!locations){
      Locations.getCities().then(function(res){
        locations = res;
      });
    }

    //To Do: Autocomplete for cities
    $scope.filteredLocations = [];
    $scope.queryLocationSearch = function(search){
      if(locations){
        $scope.filteredLocations = locations.filter(function(loc){
            return loc.name.indexOf(search) === 0;
        });
      }
    }



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

      var date = new Date();
      var day = date.getDate();
      var month = date.getMonth() + 1;
      var year = date.getFullYear();
      $scope.dateToday = month + '/' + day + '/' + year;

    //User's selected trip
    $scope.userTrip = {
      departureCity: undefined,
      arrivalCity: undefined,
      departureDate: undefined,
      returnDate: undefined
    };

    $scope.submitUserTrip = function(){
      return $http.post(
        '/api/userTrips/',
        $scope.userTrip
        ).then(function(success){
          console.log(success.data)
        }, function(err){
          console.log(err)
        });
    }

  });