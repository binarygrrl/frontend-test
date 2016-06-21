angular.module('stateApp').controller('LoginFormController', ['$scope', '$http','$routeParams', '$location', '$rootScope', function($scope, $http, $routeParams, $location, $rootScope){  //pass things from JS to template and v/s with $scope
  $scope.user = {};
  $scope.loginSubmit = function(user) {
    console.log('Got To Login');
  $http({
        method: 'POST',
        url: '/login',
        data: 
        JSON.stringify({
          user: $scope.user.user,
          password: $scope.user.password
        }),
      }).success(function(result){
          $scope.welcome = "Welcome " + $scope.user.user; 
          $rootScope.user = $scope.user.user;
          $location.path('/stateList'); 
      }).error(function(){
          $scope.errorMsg = "Error logging in, please try again";
          console.log("Error " + result);
      });  
  };
}]);

angular.module('stateApp').controller('LogoutFormController', ['$scope', '$http', function($scope, $http){  //pass things from JS to template and v/s with $scope
  $http.get('/logout').success(function(data){
    console.log('You have logged out');
  }).error(function(){
    console.log('Error logging out');
  });
}]);