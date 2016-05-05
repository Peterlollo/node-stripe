angular.module('fromAtoB.home', [])
  .controller('HomeController', function($scope, $http, Locations, $location){

    //Retrieve list of possible destinations
    var locations;
    var cities = {};
    if(!locations){
      Locations.getCities().then(function(res){
        locations = res;
        locations.forEach(function(loc) {
          cities[loc.name] = true;
        })
      });
    }

    //To Do: Autocomplete for cities
    $scope.filteredLocations = [];
    $scope.queryLocationSearch = function(search){
      if(search) search = search.toLowerCase();
      if(locations){
        $scope.filteredLocations = locations.filter(function(loc){
            return loc.name.toLowerCase().indexOf(search) === 0;
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

    $scope.userTripErrors = {
      departureCity: false,
      arrivalCity: false,
      departureDate: false,
      returnDate: false
    }

    $scope.changeModel = function(){
      $scope.userTrip.departureCity = $scope.departSearchText;
      $scope.userTrip.arrivalCity = $scope.arrivalSearchText;
    }

    $scope.validateForm = function(){
      var validForm = true;
      for(var input in $scope.userTripErrors){
        $scope.userTripErrors[input] = false;
      }
      $scope.userTrip.departureCity = $scope.userTrip.departureCity || $scope.departSearchText || '';
      $scope.userTrip.arrivalCity = $scope.userTrip.arrivalCity || $scope.arrivalSearchText || '';
      if(!cities[$scope.userTrip.departureCity.name]) {
        $scope.userTripErrors.departureCity = true;
        validForm = false;
      }
      if(!cities[$scope.userTrip.arrivalCity.name]) {
        $scope.userTripErrors.arrivalCity = true;
        validForm = false;
      }
      if(!$scope.userTrip.departureDate){
        $scope.userTripErrors.departureDate = true;
        validForm = false;
      }
      if(Date.parse($scope.userTrip.departureDate) > Date.parse($scope.userTrip.returnDate)) {
        $scope.userTripErrors.returnDate = true;
        validForm = false;
      }
      if(validForm) {
        submitUserTrip();
      }
    }

    var submitUserTrip = function(){
      $location.path('/submitted');
      return $http.post(
        '/api/userTrips/',
        $scope.userTrip
        ).then(function(success){
          console.log(success.data)
        }, function(err){
          console.log(err)
        });
    }

    //Methods dealing with opening up well containing user input form
    $scope.openUserTrip = false;
    $(document).keypress(function(e) {
      if(e.which == 13) {
        if(!$scope.openUserTrip) {
          $scope.$apply($scope.openUserTrip = true);
        }
      }
    });
  });