blog.controller('PostDetailsController', function($scope, $rootScope, $log, postService, $routeParams){

	$scope.init  = function(id) {
		$scope.postId = id;
		$scope.getPost(id);
		$scope.getPostComents(id);
		$scope.modeEdit = false;
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

	$scope.addComment = function() {
  		var comment = {"summary": $scope.comment.summary, "text":$scope.comment.text, "author":"admin", "timestamp":12345778};
   		postService.addComment($scope.postId, comment).
   		then(function(res) {
			$scope.getPostComents($scope.postId);
		}, function(err) {
			$log.log(err);
			// $scope.getPostList();
		})
 	};

 	$scope.deleteComment = function(commentId) {
		$log.log(commentId);
		postService.deleteComment($scope.postId, commentId).
		then(function(res) {
			$scope.getPostComents($scope.postId);
		}, function(err) {
			$log.log(err);
			// $scope.getPostList();
		})
	};	

	$scope.editPost = function() {
			$scope.modeEdit = true;		
		};	

	$scope.cancel = function() {
		$scope.modeEdit = false;
		
	};	
	
	$scope.save = function() {
		$scope.modeEdit = false;
		var post = {"title": $scope.title, "text": $scope.text, "author":"admin", "timestamp":12345778}
   		postService.updatePost (post, $scope.postId).
   		then(function(res) {
			$scope.getPost($scope.postId);
		}, function(err) {
			$log.log(err);
			// $scope.getPostList();
		})
			
	};
	

	$scope.init($routeParams.id);


});


