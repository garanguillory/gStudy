
angular
	.module('gStudy')
	.directive("study",['deckService', '$http', '$routeParams', function(deckService, $http, $routeParams){
		return {
			restrict: 'AE',
			templateUrl: "app/components/study/study.view.html",
			controller: function($scope){
				
				var id = $routeParams.id;

				deckService.getDeck(id)
							.then(function (data) {
							console.log('deck', data);
							$scope.deck = data.data.data;
					});

				$scope.currentQuestion = true;
				$scope.previousQuestion = true;

				$scope.current = 0;

				$scope.answered = [];
				$scope.correct = [];
				$scope.incorrect = [];

				$scope.playAgain = function(){
					$scope.current = 0;
					$scope.percentCorrect = 0;
					$scope.percentIncorrect = 0;
					$scope.answered = [];
					$scope.correct = [];
					$scope.incorrect = [];
				};

				$scope.addCorrect = function(card){
					if($scope.current < $scope.deck.cards.length){
						card.wrong = false;
							$scope.correct.push(card);
							$scope.answered.push(card);
							++$scope.current;
					} else {
							$scope.playAgain();
					}
					if($scope.correct.length){
						$scope.percentCorrect = Math.floor(100 * ($scope.correct.length / $scope.deck.cards.length));
					}
				};

				$scope.addIncorrect = function(card){
					if($scope.current < $scope.deck.cards.length){
						card.wrong = true;
							$scope.incorrect.push(card);
							$scope.answered.push(card);
							++$scope.current;
					} else {
							$scope.playAgain();
					}
					if($scope.incorrect.length){
						$scope.percentIncorrect = Math.floor(100 * ($scope.incorrect.length / $scope.deck.cards.length));
					}
				};
				
			}
		};
}]);