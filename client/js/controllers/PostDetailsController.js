blog.controller('PostDetailsController', function($scope, $rootScope, $log, postService, $routeParams){
	$log.log("DetailsController");
	
	
	$scope.postId = $routeParams.id;
	 $log.log($scope.postId);
	  postService.getPostDetails($scope.postId).
	  then(function(res) {
	   $scope.title = res.title;
	   $scope.text = res.text;
	   $scope.author = res.author;
	   $scope.timestamp = res.timestamp;

	  }, function(err) {
	   $log.log(err);
	   // $scope.getPostList();
	  })

});


