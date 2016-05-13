
angular
	.module('gStudy')
	.directive("newdeck",['newdeckService', '$window','$compile', function(newdeckService, $window, $compile){
		return {
			restrict: 'AE',
			templateUrl: "app/components/newdeck/newdeck.view.html",
			controller: function($scope, $location){

				var id = $window.localStorage.id;

				console.log('id: ',id);

				$scope.deckInfo = {};
				// $scope.card = {};
				$scope.deckInfo.user_id = id;				
				$scope.deckInfo.cardsArray = [{}];

				// how to set a default image to http://placehold.it/200x200 ???

				$scope.createDeck = function(){	
					newdeckService.addDeckInfo($scope.deckInfo)
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


