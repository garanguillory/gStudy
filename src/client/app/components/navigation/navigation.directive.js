
angular
	.module('gStudy')
	.directive("navigation",['navigationService',function(navigationService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/navigation/navigation.view.html",
			controller: function($scope){

				
			}
		};
}]);