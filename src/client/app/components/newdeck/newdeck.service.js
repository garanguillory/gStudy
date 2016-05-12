angular
	.module('gStudy')
	.service('newdeckService', [ '$http', function($http){

		return {
			addDeckInfo: function(payload){
				return $http.post('/api/users/newdeck', payload)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		}

}]);

