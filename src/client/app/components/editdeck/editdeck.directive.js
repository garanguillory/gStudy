
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
						$scope.deckInfo = data.data.data;
						$scope.deckInfo.cardsArray = [];
							for(var i=0; i<$scope.deckInfo.length; i++){
								$scope.deckInfo.cardsArray.push($scope.deckInfo[i]);
							}
					})

				// $scope.deckInfo.cardsArray = [];		
				// for(var i=0; i<deckInfo.length; i++){
				// 	$scope.deckInfo.cardsArray.push($scope.deckInfo[i]);
				// }

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
					console.log($scope.deckInfo);
					editdeckService.editDeck(id, $scope.deckInfo)
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


