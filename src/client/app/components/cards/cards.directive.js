
angular
	.module('gStudy')
	.directive("cards",['cardsService', '$compile', function(cardsService, $compile){
		return {
			restrict: 'AE',
			templateUrl: "app/components/cards/cards.view.html",
			scope: {
				array: "=",
				card: "="
			},
			controller: function($scope){
				$scope.addCard = function(){
					$scope.array.push({});
					console.log($scope.array);
				};
			}
		};
}]);