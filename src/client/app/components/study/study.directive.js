
angular
	.module('gStudy')
	.directive("study",['studyService', '$http', '$routeParams', function(studyService, $http, $routeParams){
		return {
			restrict: 'AE',
			templateUrl: "app/components/study/study.view.html",
			controller: function($scope){
				
				var id = $routeParams.id;
				console.log('id: ', id);

				studyService.getDeck(id)
							.then(function (data) {
							console.log('deck', data);
							$scope.deck = data.data.data;
					})

				$scope.currentQuestion = true;
				$scope.previousQuestion = true;

				$scope.current = 0;

				$scope.answered = [];
				$scope.correct = [];
				$scope.incorrect = [];


				$scope.addCorrect = function(card){
					if($scope.current <= $scope.deck.length){
							$scope.correct.push(card);
							$scope.answered.push(card);
							++$scope.current;
					} else {
							$scope.current = 0;
					}
					if($scope.correct.length){
						$scope.percentCorrect = Math.floor(100 * $scope.correct.length / $scope.deck.length);
					}
				};

				$scope.addIncorrect = function(card){
					if($scope.current <= $scope.deck.length){
							$scope.incorrect.push(card);
							$scope.answered.push(card);
							++$scope.current;
					} else {
							$scope.current = 0;
					}
					if($scope.incorrect.length){
						$scope.percentIncorrect = Math.floor(100 * ($scope.incorrect.length / $scope.deck.length));
					}
				};

				$scope.playAgain = function(){
					$scope.current = 0;
					$scope.answered = [];
					$scope.correct = [];
					$scope.incorrect = [];

				};
				
			}
		};
}]);