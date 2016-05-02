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
  });