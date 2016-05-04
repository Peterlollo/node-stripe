angular.module('fromAtoB', ['fromAtoB.home', 'fromAtoB.submitted', 'fromAtoB.services', 'ngRoute', 'ngMaterial', 'ngMessages'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
    //Set up Appropriate routes here
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
      //Require and add $httpProvider interceptor here if needed
  }]);
  //Add authorization checks here if needed