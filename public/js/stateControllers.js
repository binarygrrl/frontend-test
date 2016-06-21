angular.module('stateApp').controller('StateListController', ['$scope', '$http', function($scope, $http){  //pass things from JS to template and v/s with $scope
  $http.get('/states/abbreviations').success(function(data){
    $scope.states = data;
    console.log(data);
  });
}]);

angular.module('stateApp').controller('SingleStateAbbrevController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  var abbrev = $routeParams.abbreviation;
  var abbrev2 = abbrev.replace(/:/g, "");
  $http.get('/states/' + abbrev2).success(function(data) {
    $scope.state = data;  
  });
}]);