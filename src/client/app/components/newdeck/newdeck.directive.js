
angular
	.module('gStudy')
	.directive("newdeck",['newdeckService', '$window','$compile', function(newdeckService, $window, $compile){
		return {
			restrict: 'AE',
			templateUrl: "app/components/newdeck/newdeck.view.html",
			controller: function($scope, $location){

				var id = $window.localStorage.id;

				console.log('id: ',id);

				$scope.deck = {};
				$scope.deck.user_id = id;				
				$scope.deck.cards = [{}];

				$scope.createDeck = function(){	
					newdeckService.addDeckInfo($scope.deck)
						.then(function(deck){
							console.log("created deck: ", deck);
							$location.path('/profile');
						})
						.catch(function(err) {
						  console.log("err: ",err);
						});

				};


			}
		};
}]);


