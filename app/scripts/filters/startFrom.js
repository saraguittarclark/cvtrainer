(function() {
	function startFrom() {
		return function (input, start) {
			if(input) {
				start =+ start;
				return input.slice(start);
			}
		}
	}

	angular
		.module('cvapp')
		.filter('startFrom', startFrom);
})();