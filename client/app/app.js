angular.module('fromAtoB', ['fromAtoB.home', 'ngRoute'])
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
      });
      //Require and add $httpProvider interceptor here if needed
  }]);
  //Add authorization checks here if needed