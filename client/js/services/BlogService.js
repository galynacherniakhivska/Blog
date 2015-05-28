blog.service('postService', function($http, $log, $q, $rootScope){
	
	var serv = this;

    this.getPostsFrom = function(from, length) {
		var deferred = $q.defer();
		$log.log(from)

		$http.get($rootScope.endPoint +'/api/posts?begin=' + from + '&length=' + length).
		success(function(res) {
			$log.log('response');
			$log.log(res);
			deferred.resolve(res);
		}).
		error(function(err, status) {
			deferred.reject(err);
		})

    	return deferred.promise;
    };

    this.getPostsAfter = function(after, length) {
		var deferred = $q.defer();

		$http.get($rootScope.endPoint +'/api/posts?after=' + after + '&length=' + length).
		success(function(res) {
			$log.log('response');
			$log.log(res);
			deferred.resolve(res);
		}).
		error(function(err, status) {
			deferred.reject(err);
		})

    	return deferred.promise;
    };

    this.deletePost = function(id) {
		var deferred = $q.defer();

		$http.delete($rootScope.endPoint +'/api/posts/' + id).
		success(function(res) {
			$log.log('response');
			$log.log(res);
			deferred.resolve(res);
		}).
		error(function(err, status) {
			deferred.reject(err);
		})

    	return deferred.promise;
    };

   //this.UpdatePost

    this.addPost = function(post)
   {
		  var deferred = $q.defer();

		  var req = {
		    method: 'POST',
		    url: $rootScope.endPoint +'/api/posts',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    data: post
		   }

		  $http (req).
		  success(function(res) {
		   $log.log('response');
		   $log.log(res);
		   deferred.resolve(res);
		  }).
		  error(function(err, status) {
		   deferred.reject(err);
  })

     return deferred.promise;
    }

	this.getPostDetails = function(id) {
		
			var deferred = $q.defer();

			$http.get($rootScope.endPoint +'/api/posts/' + id).
			success(function(res) {
			$log.log(res);
			deferred.resolve(res);
		}).
		error(function(err, status) {
			deferred.reject(err);
		})

    	return deferred.promise;
    };
	
///Post Comments
	this.getComments = function(postId) {
		
			var deferred = $q.defer();
			
			$http.get($rootScope.endPoint +'/api/posts/' + postId + '/comments').
			success(function(res) {
		$log.log(res);
			deferred.resolve(res);
		}).
		error(function(err, status) {
			deferred.reject(err);
		})

    	return deferred.promise;
    };

     this.addComment = function(postId, comment)
   {
		  var deferred = $q.defer();

		  var req = {
		    method: 'POST',
		    url: $rootScope.endPoint +'/api/posts/' + postId + '/comments',
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    data: comment
		   }

		  $http (req).
		  success(function(res) {
		   $log.log('response');
		   $log.log(res);
		   deferred.resolve(res);
		  }).
		  error(function(err, status) {
		   deferred.reject(err);
  })

     return deferred.promise;
    }

    this.deleteComment = function(postId, commentId) {
		var deferred = $q.defer();

		$http.delete($rootScope.endPoint +'/api/posts/' + postId + '/comments/' + commentId).
		success(function(res) {
			$log.log('response');
			$log.log(res);
			deferred.resolve(res);
		}).
		error(function(err, status) {
			deferred.reject(err);
		})

    	return deferred.promise;
    };

    this.updatePost = function(post, postId)
   {
		  var deferred = $q.defer();

		  var req = {
		    method: 'PUT',
		    url: $rootScope.endPoint +'/api/posts/' + postId,
		    headers: {
		      'Content-Type': 'application/json'
		    },
		    data: post
		   }

		  $http (req).
		  success(function(res) {
		   $log.log('response');
		   $log.log(res);
		   deferred.resolve(res);
		  }).
		  error(function(err, status) {
		   deferred.reject(err);
		  })
		  
		  return deferred.promise;
    };


    return serv;
	
})