
angular
	.module('gStudy')
	.directive("newdeck",['newdeckService', '$window', function(newdeckService, $window){
		return {
			restrict: 'AE',
			templateUrl: "app/components/newdeck/newdeck.view.html",
			controller: function($scope){

				var id = $window.localStorage.id;

				console.log('id: ',id);

				$scope.deckInfo = {};
				$scope.deckInfo.user_id = id;
				$scope.card = {}; 										// ???
				$scope.deckInfo.cardsArray = [];

				$scope.addCard = function(){
					$scope.deckInfo.cardsArray.push($scope.card);
					$scope.card = {};
					// code to add a new card form
				};

				$scope.createDeck = function(){
					$scope.deckInfo.cardsArray.push($scope.card);	
					newdeckService.addDeckInfo($scope.deckInfo)
						.then(function(deck){
							console.log("created deck: ", deck);
						})
						.catch(function(err) {
						  // check status code, send appropriate message
						  console.log("err: ",err);
						});



					$scope.deckInfo = {};
					$scope.card = {};
					$scope.deckInfo.cardsArray = [];
				};


			}
		};
}]);


