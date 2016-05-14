
angular
	.module('gStudy')
	.directive("newcard",['editdeckService','deckService','$window','$routeParams', function(editdeckService, deckService, $window, $routeParams){
		return {
			restrict: 'AE',
			templateUrl: "app/components/newcard/newcard.view.html",
			controller: function($scope, $location){
					$scope.addCard = function(){
						$scope.array.push({});
						// $scope.card = {};
						console.log($scope.array);
					};
			}
		};
}]);