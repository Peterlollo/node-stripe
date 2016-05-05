angular.module('fromAtoB.submitted', [])
  .controller('SubmittedController', function($location, $scope){
    $scope.backToHomePage = function(){
      $location.path('/home');
    }

    $(document).keypress(function(e) {
      if(e.which == 13) {
        $scope.$apply($scope.backToHomePage());
      }
    });
  });