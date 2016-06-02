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
	}

	angular
		.module('cvapp')
		.controller('CVTrainerCtrl', ['aiData', '$scope', CVTrainerCtrl]);
})();

