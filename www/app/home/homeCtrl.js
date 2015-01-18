angular.module('hello4').controller('HomeController', [
	'$scope', 
	'Images',
	'Info',
	function ($scope, Images, Info) {
		$scope.image;
		$scope.captureImage = function() { 
			Images.fromCamera().then(
				function(data) {
					$scope.image = data;
				}, 
				function(error) {
					Info.error('Camera Error', error);
				});
		};
}]);