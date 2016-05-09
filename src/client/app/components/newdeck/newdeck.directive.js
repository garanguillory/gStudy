
angular
	.module('gStudy')
	.directive("newdeck",['newdeckService', function(newdeckService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/newdeck/newdeck.view.html",
			controller: function($scope){
				console.log("newdeck directive")
			}
		};
}]);


