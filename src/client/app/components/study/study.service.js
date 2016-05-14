angular
	.module('gStudy')
	.service('studyService',[ '$http', function($http){

		return {
			getDeck: function(id){
				return $http.get('/api/users/deck/'+id)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		}

}]);