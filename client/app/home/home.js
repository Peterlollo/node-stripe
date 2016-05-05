angular.module('fromAtoB.home', [])
  .controller('HomeController', function($scope, $http, Locations, $location, DateServices){

    //RETRIEVE DESTINATIONS FROM API
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

    //AUTOCOMPLETE FUNCTIONALITY FOR LOCATION SEARCH FIELDS
    $scope.filteredLocations = [];
    $scope.queryLocationSearch = function(search){
      if(locations && search){
        $scope.filteredLocations = locations.filter(function(loc){
            return loc.name.toLowerCase().indexOf(search.toLowerCase()) === 0;
        });
      }
    }

    //SET DATE VALUES FOR DATE SELECTION INPUT FIELDS
    $scope.dateToday = DateServices.getDate()['dateToday'];
    $scope.minDate = DateServices.getDate()['minDate'];
    $scope.maxDate = DateServices.getDate()['maxDate'];

    //USER TRIP OBJECT
    $scope.userTrip = {
      departureCity: undefined,
      arrivalCity: undefined,
      departureDate: undefined,
      returnDate: undefined
    };

    //INPUT VALIDATION OBJECT FOR USER TRIP
    $scope.userTripErrors = {
      departureCity: false,
      arrivalCity: false,
      departureDate: false,
      returnDate: false
    }

    //DATA BINDING BETWEEN USER TRIP OBJECT AND HTML INPUT FIELDS
    $scope.changeModel = function(){
      $scope.userTrip.departureCity = $scope.departSearchText;
      $scope.userTrip.arrivalCity = $scope.arrivalSearchText;
    }

    //PERFORM INPUT VALIDATION ON SUBMIT FOR USER TRIP OBJECT
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

    //SUBMIT VALID USER TRIP OBJECT TO API
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

    //METHODS HANDLING INITIAL OPENING OF USER TRIP SELECTION FORM
    $scope.openUserTrip = false;
    $(document).keypress(function(e) {
      if(e.which == 13) {
        if(!$scope.openUserTrip) {
          $scope.$apply($scope.openUserTrip = true);
        }
      }
    });
  });