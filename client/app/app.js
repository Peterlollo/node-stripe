angular.module('fromAtoB', ['fromAtoB.home', 'fromAtoB.submitted', 'fromAtoB.services', 'ngRoute', 'ngMaterial', 'ngMessages'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    //FRONT END ROUTES
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .when('/home', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeController'
      })
      .when('/submitted', {
        templateUrl: 'app/submitted/submitted.html',
        controller: 'SubmittedController'
      });
  }]);