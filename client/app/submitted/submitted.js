angular.module('fromAtoB.submitted', [])
  .controller('SubmittedController', function($location, $scope, $anchorScroll, $timeout){

    //REDIRECT TO HOME PAGE
    $scope.backToHomePage = function(){
      $location.path('/home');
    }

    //SCROLL USER BACK TO TOP OF SCREEN
    function scrollToTop () {
      $timeout(function() {
               $location.hash('top');
               $anchorScroll();
               });
    };
    scrollToTop();

    //REDIRECT TO HOME ON ENTER KEYPRESS
    $(document).keypress(function(e) {
      if(e.which == 13) {
        $scope.$apply($scope.backToHomePage());
      }
    });
  });