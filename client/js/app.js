var blog = angular.module('blog', []);
blog.run(function($rootScope) {
	$rootScope.endPoint = 'http://localhost:3003'
	$rootScope.postOnPage = 5;
});