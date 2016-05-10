
angular
	.module('gStudy')
	.directive("navigation",['navigationService', 'authService', function(navigationService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/navigation/navigation.view.html",
			controller: function($scope, $location){

					$scope.logout = function(){
						console.log("logging out...");
						authService.logout();
						$location.path('/login');
					};
				
			}
		};
}]);