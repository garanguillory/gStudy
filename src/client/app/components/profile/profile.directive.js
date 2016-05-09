
angular
	.module('gStudy')
	.directive("profile",['profileService',function(profileService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/profile/profile.view.html",
			controller: function($scope){

				
			}
		};
}]);