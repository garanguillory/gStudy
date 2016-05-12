angular
	.module('gStudy')
	.service('editdeckService', [ '$http', function($http){

		return {
			editDeck: function(id,payload){
				return $http.put('/api/users/editdeck/'+id, payload)
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										});
			}
		}

}]);

