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

		var deferred = $q.defer();

		var req = {
			 method: 'POST',
			 url: $rootScope.endPoint +'/api/posts',
			 headers: {
			   'Content-Type': 'application/json'
			 },
			 data: post;

		$http.add(req).
		success(function(res) {
			$log.log('response');
			$log.log(res);
			deferred.resolve(res);
		}).
		error(function(err, status) {
			deferred.reject(err);
		})

    	return deferred.promise;



    return serv;
	
})