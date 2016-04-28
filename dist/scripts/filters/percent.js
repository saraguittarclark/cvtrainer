(function() {
	function percent() {
		return function(number) {

			if (Number.isNaN(number)) {
				return console.log("NaN!");
			}

			// var percentBase = Math.floor(decimal);
			var percentage = number * 100;

			var output = percentage + "%";

			return output;
		};
	}

	angular
		.module('cvapp')
		.filter('percent', percent);
})();//decimals to percent display