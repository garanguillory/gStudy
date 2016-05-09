
angular
	.module('gStudy')
	.directive("study",['studyService',function(studyService){
		return {
			restrict: 'AE',
			templateUrl: "app/components/study/study.view.html",
			controller: function($scope){
				console.log("study directive")
				
			}
		};
}]);