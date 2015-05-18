var blog = angular.module('blog', ['ngRoute']);

blog.run(function($rootScope) {
	$rootScope.endPoint = 'http://localhost:3003'
	$rootScope.postOnPage = 5;
});

blog.config (function ($routeProvider) {
	$routeProvider
	
	.when ('/', {
	controller: 'PostController',
	templateUrl: 'sidebar.html'
	})
	.when ('/posts/:id', {
		controller: 'PostDetailsController',
		templateUrl: 'views/postDetails.html'
	})
	.otherwise ({
		redirectTo: '/'
	});
});


