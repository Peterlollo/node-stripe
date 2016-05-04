angular.module('fromAtoB.submitted', [])
  .controller('SubmittedController', function($location, $scope){
    $scope.backToHomePage = function(){
      $location.path('/home');
    }
  });