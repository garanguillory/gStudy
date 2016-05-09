
angular
	.module('gStudy')
	.directive("register",['registerService', function(registerService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/register/register.view.html",
			controller: function($scope){
				console.log("register directive")
			}
		};
}]);


