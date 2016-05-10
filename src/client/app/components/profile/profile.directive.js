
angular
	.module('gStudy')
	.directive("profile",['profileService', '$http', function(profileService, $http){
		return {
			restrict: 'AE',
			templateUrl: "app/components/profile/profile.view.html",
			controller: function($scope, $window, authService){

				var id = $window.localStorage.id;

				profileService.getDecks(id)
							.then(function (data) {
							console.log('decks', data);
							$scope.decks = data.data.data;
					})

				console.log('$window.localStorage: ', $window.localStorage);

				// console.log('currentUser: ', currentUser);

			}
		};
}]);