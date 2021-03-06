blog.controller('PostController', function($scope, $rootScope, $log, postService){
	$log.log("PostController");

	
	$scope.init = function() {
		$scope.getPostsFrom(0, $rootScope.postOnPage);
		$scope.page = 1;
		$scope.pageSize = 5;
	};

	$scope.getPostsFrom = function(from, length) {
		postService.getPostsFrom(from, length).
		then(function(res) {
			$scope.posts = res;
			definedLastPage ();
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


	$scope.getMore = function() {
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

	function definedLastPage () {
		if ($scope.posts.length < $rootScope.postOnPage) {
			$scope.nextPageCount = 0;
		}

		postService.getPostsFrom(getFirstPostOfPage($scope.page+1), $rootScope.postOnPage).
		then(function(res) {
			$scope.nextPageCount = res.length;
		}, function(err) {
			$log.log(err);
		})		
	}

	$scope.init();


});

	