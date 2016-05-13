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
			},
			deleteDeck: function(deck_id){
				return $http.delete('/api/users/deck/'+deck_id+'/delete')
										.then(function(res){
										  return res;
										})
										.catch(function(err){
										  return err;
										}); 
			}
		}

}]);

