angular
	.module('gStudy')
	.service('profileService',[ '$http', function($http){

		return {
			getDecks: function(id){
				return $http.get('/api/users/' + id +'/decks')
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		};

}]);