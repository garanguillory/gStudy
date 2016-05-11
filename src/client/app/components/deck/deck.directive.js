
angular
	.module('gStudy')
	.directive("deck",['deckService', '$http', '$routeParams', function(deckService, $http, $routeParams){
		return {
			restrict: 'AE',
			templateUrl: "app/components/deck/deck.view.html",
			controller: function($scope, $window){

				var id = $routeParams.id;

				console.log('id: ', id);

				deckService.getDeck(id)
							.then(function (data) {
							console.log('deck', data);
							$scope.deck = data.data.data;
					})
				
			}
		};
}]);