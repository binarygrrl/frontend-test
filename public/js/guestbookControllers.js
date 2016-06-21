angular.module('stateApp').controller('GuestbookController', ['$scope', '$http', function($scope, $http){  //pass things from JS to template and v/s with $scope
  $http.get('/read').success(function(data){
    $scope.messages = data;
  });
}]);

angular.module('stateApp').controller('PostGuestbookController', ['$scope', '$http','$routeParams', '$location', '$rootScope', function($scope, $http, $routeParams, $location, $rootScope){  //pass things from JS to template and v/s with $scope
  $scope.gbMsg = {};
  $scope.gbMsg.phone = '';
  $scope.gbMsg.message = '';
  $scope.user = $rootScope.user;
  if($scope.user){
    $scope.postMsg = function(gbMsg) {
      $http({
        method: 'POST',
        url: '/write',
        data: //$scope.gbMsg,
        JSON.stringify({
            user: $scope.user, //'alice',
            phone: $scope.gbMsg.phone,
            message: $scope.gbMsg.message
          }),
      }).success(function(data){
        console.log('Post Successful');
        $scope.thankYou = "Thank you for posting "+ $scope.user; 
      }).error(function(){
        console.log('Error posting message to guestbook');
        $scope.errorMsg = "Error posting message to guestbook";
      });
    };
  }else {
        $scope.errorMsg = "Please log in to post";
  }
}]);

 