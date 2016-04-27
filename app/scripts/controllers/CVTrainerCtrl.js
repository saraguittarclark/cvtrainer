(function() {
	function CVTrainerCtrl(aiData, $scope) {
		//stored in database
		this.cvTrainerData = aiData.getData();

		// var cvTrainerData = aiData.getData();

		// function horseWidth() {
		// 	$scope.horseWidth = cvTrainerData.image.horse * 100;
		// }
	}

	angular
		.module('cvapp')
		.controller('CVTrainerCtrl', ['aiData', '$scope', CVTrainerCtrl]);
})();