blog.controller('PostDetailsController', function($scope, $rootScope, $log, postService, $routeParams){
	$log.log("controller");
	
	$scope.init = function() {
		$scope.postId = $routeParams.id;
		$scope.page = 1;
	};

	$scope.getPostDetails = function() {
		$log.log($scope.postId);
		postService.getPostDetails($scope.postId).
		then(function(res) {
			$log.log(res [0]) ;
		}, function(err) {
			$log.log(err);
			// $scope.getPostList();
		})
	};	

});


