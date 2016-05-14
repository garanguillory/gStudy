
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
						for(var i=0; i<$scope.deck.cards.length; i++){
							$scope.deck.cards[i].delete = false;
							$scope.deck.newcards = [{}];
						}
					});

				$scope.deleteCard = function(card){
					console.log(card);
					card.delete = true;
				};

				$scope.unDeleteCard = function(card){
					console.log(card);
					card.delete = false;
				};

				$scope.deleteDeck = function(){
					editdeckService.deleteDeck(id)
						.then(function(){
							$location.path('/profile');
						})
						.catch(function(err) {
						  console.log("err: ",err);
						});
				};

				$scope.editDeck = function(){
					console.log($scope.deck);
					editdeckService.editDeck(id, $scope.deck)
						.then(function(deck){
							console.log("edited deck: ", deck);
							$location.path('/profile');
						})
						.catch(function(err) {
						  console.log("err: ",err);
						});
				};
			}
		};
}]);


