angular.module('fromAtoB.services', [])
  .factory('Locations', function($http) {
    var getCities = function() {
      return $http.get('/api/locations/')
                  .then(function(res) {
                    return res.data.map(function(location){
                      return location.name;
                    });
                  },
                  function(err) {
                    console.error(err);
                  });
    }
    return {
      getCities: getCities
    }
  });