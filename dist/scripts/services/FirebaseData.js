(function () {
	function FirebaseData($firebaseArray) {
		var firebaseRef = new Firebase("https://cvtrainer.firebaseio.com/");

		var dataArray = $firebaseArray(firebaseRef);

		return {
			all: dataArray,
			//
			add: function(keyPress) {
				//change data to accomodate user confidence
				//change graph immediately to show user input
			}
		};
	}

	angular
		.module('cvapp')
		.factory('FirebaseData', ['$firebaseArray', FirebaseData]);
})();