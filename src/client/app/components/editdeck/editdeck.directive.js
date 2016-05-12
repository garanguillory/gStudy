
angular
	.module('gStudy')
	.directive("editdeck",['editdeckService','deckService','$window','$routeParams', function(editdeckService, deckService, $window, $routeParams){
		return {
			restrict: 'AE',
			templateUrl: "app/components/editdeck/editdeck.view.html",
			controller: function($scope, $location){

				var id = $routeParams.id;

				deckService.getDeck(id)
						.then(function (data) {
						console.log('deckInfo', data);
						$scope.deck = data.data.data;
					})

				$scope.editDeck = function(){
					console.log($scope.deck);
					editdeckService.editDeck(id, $scope.deck)
						.then(function(deck){
							console.log("edited deck: ", deck);
							$location.path('/profile');
						})
						.catch(function(err) {
						  // check status code, send appropriate message
						  console.log("err: ",err);
						});
				};

			}
		};
}]);


