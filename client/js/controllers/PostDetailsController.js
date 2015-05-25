blog.controller('PostDetailsController', function($scope, $rootScope, $log, postService, $routeParams){

	$scope.init  = function(id) {
		$scope.getPost(id);
		$scope.getPostComents(id);
	};

	$scope.getPost = function(id) {
		postService.getPostDetails(id).
		then(function(res) {
			$scope.title = res.title;
	        $scope.text = res.text;
	   		$scope.author = res.author;
	   		$scope.timestamp = res.timestamp;
		}, function(err) {
			$log.log(err);
		})
	};

	$scope.getPostComents = function(postId) {
		postService.getComments(postId).
		then(function(res) {
			$scope.comments = res;
		}, function(err) {
			$log.log(err);
		})
	};



	$scope.init($routeParams.id);


});


