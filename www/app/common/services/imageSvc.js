// NOTE: Please review this page for information about device-specific quirks and additional API functionality: http://docs.phonegap.com/en/edge/cordova_camera_camera.md.html.

angular.module('hello4').factory('Images', ['$log', '$q', function ($log, $q) {
    function getPicture() {
		var deferred = $q.defer();
		
		//test
		navigator.camera.getPicture(
			function(imageData) {
				deferred.resolve({
					format: 'jpeg',
					data: imageData
				});
			}, 
			function(message) {
				deferred.reject(message);
			}, 
			{
				quality: 50,
				destinationType: Camera.DestinationType.DATA_URL
			}
		);
		return deferred.promise;
    };

    return {
        fromCamera: getPicture
    };
}]);