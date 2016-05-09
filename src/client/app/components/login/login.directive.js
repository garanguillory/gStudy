
angular
	.module('gStudy')
	.directive("login",['loginService', function(loginService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/login/login.view.html",
			controller: function($scope){
				console.log("login directive")
			}
		};
}]);


