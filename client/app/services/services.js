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
  });