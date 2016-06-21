angular.module('stateApp').config(['$routeProvider', function($routeProvider){
	$routeProvider.
	when('/stateList/:abbreviation', { 
		templateUrl: 'partials/StateList/stateElement.html',
		controller: 'SingleStateAbbrevController'
	}).
	when('/stateList', {
		templateUrl: 'partials/StateList/index.html',
		controller: 'StateListController'
	}).
	when('/guestBook', {
		templateUrl: 'partials/GuestBook/index.html',
		controller: 'GuestbookController'
	}).
	when('/guestBook/post', {
		templateUrl: 'partials/GuestBook/postForm.html',
		controller: 'PostGuestbookController'
	}).
	when('/login', {
		templateUrl: 'partials/Login/index.html',
		controller: 'LoginFormController'
	}).
	when('/logout', {
		templateUrl: 'partials/Login/logout.html',
		controller: 'LogoutFormController'
	}).
	otherwise({
		redirectTo: '/login'
	});
}]);