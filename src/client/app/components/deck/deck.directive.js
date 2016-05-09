
angular
	.module('gStudy')
	.directive("deck",['deckService',function(deckService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/deck/deck.view.html",
			controller: function($scope){
				console.log("deck directive")
				
			}
		};
}]);