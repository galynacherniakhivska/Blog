blog.controller('PostController', function($scope, $rootScope, $log, postService){
	$log.log("PostController");


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
	};

	$scope.addPost = function() {
  		var post = {"title":"Post", "text":"Hello there", "author":"admin", "timestamp":12345778};
   		postService.addPost (post).
   		then(function(res) {
			$scope.getPostsFrom(getFirstPostOfPage($scope.page), $rootScope.postOnPage);
		}, function(err) {
			$log.log(err);
			// $scope.getPostList();
		})
 		};

 	$scope.deletePost = function(post) {
 		if (confirm ("Are you sure?")) {
 			$log.log(post.id);
			postService.deletePost(post.id).
			then(function(res) {
			$scope.getPostsFrom(getFirstPostOfPage($scope.page), $rootScope.postOnPage);
			}, 	function(err) {
				$log.log(err);
				// $scope.getPostList();
			})
	 	}		
	};	


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
	};

	
	$scope.init();


});