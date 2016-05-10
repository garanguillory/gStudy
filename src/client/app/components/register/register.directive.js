
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
				      $location.path('/');
				      // $location.path('/profile/'+$scope.user.id); ???
				      // $location.path('/profile/'+user.id);        ???
				      $rootScope.currentUser = authService.getUserInfo();
				    })
				    .catch(function(err) {
				      // check status code, send appropriate message
				      console.log("err: ",err);
				    });
				};

			}
		};
}]);

