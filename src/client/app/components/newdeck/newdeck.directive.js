
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

				// how to set a default image to http://placehold.it/200x200 ???

				$scope.createDeck = function(){	
					newdeckService.addDeckInfo($scope.deck)
						.then(function(deck){
							console.log("created deck: ", deck);
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


