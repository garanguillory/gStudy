
angular
	.module('gStudy')
	.directive("register",['registerService', 'authService', function(registerService, authService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/register/register.view.html",
			controller: function($rootScope, $scope, $location, authService){

				$scope.user = {};
				$scope.register = function() {

				  authService.register($scope.user)
				    .then(function(user) {
				    	console.log("$scope.user: ", $scope.user);
				      authService.setUserInfo(user);
				      $location.path('/profile');
				      $rootScope.currentUser = authService.getUserInfo();
				    })
				    .catch(function(err) {
				      console.log("err: ",err);
				    });
				};

			}
		};
}]);

