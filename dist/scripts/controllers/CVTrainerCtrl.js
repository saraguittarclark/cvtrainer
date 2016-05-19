(function() {
	function CVTrainerCtrl(aiData, $scope) {
		//stored in database
		this.cvTrainerData = aiData.getData();

		$scope.currentIndex = 0;
		$scope.clickEvent = function (event, image) {
			console.log(angular.element(event.target).data("button"));
			// determine what was clicked based on image?
			$scope.currentIndex++;
		};

		$scope.decrement = function () {
			$scope.currentIndex--;
		};




/*

		$scope.clicked = false;
		var numClicks = 0;

		$scope.clickEvent = function() {
			this.clicked = true;
			numClicks++;
			if (numClicks > 1) {
				$scope.clicked = true;
			};

		};*/
		//when reload is clicked, no option to see again
	}

	angular
		.module('cvapp')
		.controller('CVTrainerCtrl', ['aiData', '$scope', CVTrainerCtrl]);
})();



//when the next li is clicked, completely remove from DOM
//add variable "done" and can't go back after 5 have been clicked
//when clicked = 5, hide all

//media queries!
//portfolio stuff
//dumb self-reflection
//animate hide/show