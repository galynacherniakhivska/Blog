blog.controller('PostController', function($scope, $rootScope, $log, postService){
	$log.log("controller");


	$scope.init = function() {
		$scope.getPostsFrom(0, $rootScope.postOnPage);
		$scope.page = 1;
	};

	$scope.getPostsFrom = function(from, length) {
		postService.getPostsFrom(from, length).
		then(function(res) {
			$scope.posts = res;
		}, function(err) {
			$log.log(err);
		})
	};

	$scope.getPostsAfter = function(after, length) {
		postService.getPostsAfter(after, length).
		then(function(res) {
			$scope.posts = res;
		}, function(err) {
			$log.log(err);
		})
	}

	$scope.deletePost = function(post) {
		$log.log(post.id);
		postService.deletePost(post.id).
		then(function(res) {
			$scope.getPostsFrom(getFirstPostOfPage($scope.page), $rootScope.postOnPage);
		}, function(err) {
			$log.log(err);
			// $scope.getPostList();
		})
	};	

	//$scope.UpdatePost

	$scope.getNext = function() {
		$scope.page++;
		$scope.getPostsFrom(getFirstPostOfPage($scope.page), $rootScope.postOnPage);	
	};

    $scope.getPrevious = function() {
		$scope.page--;
		$scope.getPostsFrom(getFirstPostOfPage($scope.page), $rootScope.postOnPage);
	};

	function getFirstPostOfPage (page) {
		return $rootScope.postOnPage * (page - 1);
	}


	$scope.init();


});