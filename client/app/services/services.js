angular.module('fromAtoB.services', [])

  .factory('Locations', function($http) {
    var getCities = function() {
      return $http.get('/api/locations/')
                  .then(function(res) {
                    return res.data;
                  },
                  function(err) {
                    console.error(err);
                  });
    }

    return {
      getCities: getCities
    }
  })

  .factory('DateServices', function() {
    var getDate = function() {

      var myDate = new Date();
      var day = myDate.getDate();
      var month = myDate.getMonth() + 1;
      var year = myDate.getFullYear();

      var minDate = new Date(
        myDate.getFullYear(),
        myDate.getMonth(),
        myDate.getDate());

      var maxDate = new Date(
        myDate.getFullYear(),
        myDate.getMonth() + 3,
        myDate.getDate());

      var dateToday = month + '/' + day + '/' + year;

      return {
        'minDate': minDate,
        'maxDate': maxDate,
        'dateToday': dateToday
      }
    }

    return {
      getDate: getDate
    }
  })

  .factory('InputHandling', function(){

    var adjustCity = function(city){
      if(city) {
        var cityArray = city.split('');
        cityArray[0] = cityArray[0].toUpperCase();
        return cityArray.join('');
      }
      return city;
    };

    var findLocationObjectFromCity = function(targetCity, locations) {
      targetCity = targetCity.toLowerCase();
      if(!locations) return targetCity;
      var foundLocation = targetCity;
      for(var i = 0; i < locations.length; i++) {
        if(locations[i].name.toLowerCase() === targetCity) {
          foundLocation = locations[i];
          break;
        }
      }
      return foundLocation;
    };

    var resetErrors = function(errorObj) {
        for(var input in errorObj){
        errorObj[input] = false;
      }
      return true;
    };

    var checkDates = function(userTripObj, tripErrorObj, formValidVariable){
      if(!userTripObj.departureDate){
        tripErrorObj.departureDate = true;
        formValidVariable = false;
      }
      if(Date.parse(userTripObj.departureDate) > Date.parse(userTripObj.returnDate)) {
        tripErrorObj.returnDate = true;
        formValidVariable = false;
      }
      return formValidVariable;
    }

    var checkCityField = function(cityObj, inputCity, userTripObj, tripErrorObj, locationsObj, direction, formValid) {
      var cityToModify = direction === 'depart' ? 'departureCity' : 'arrivalCity';
      if(!cityObj[inputCity.name]) {
        if(cityObj[inputCity] || cityObj[adjustCity(inputCity)]) {
          userTripObj[cityToModify] = findLocationObjectFromCity(inputCity, locationsObj);
        } else {
          tripErrorObj[cityToModify] = true;
          formValid = false;
        }
      }
      return formValid;
    }

    return {
      adjustCity: adjustCity,
      findLocationObjectFromCity: findLocationObjectFromCity,
      resetErrors: resetErrors,
      checkDates: checkDates,
      checkCityField: checkCityField
    }
  });