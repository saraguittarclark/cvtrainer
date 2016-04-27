(function() {
	function aiData() {
		var aiData = {};
		var aiDataSet = {
			images: [
				{name: 'centaur1', centaur: '.5', man: '.3', horse:'.2', imageUrl:'assets/myth/centaur1.bmp'},
				{name: 'centaur2', centaur:'.6', man:'.2', horse:'.2', imageUrl:'assets/myth/centaur3.bmp'},
				{name: 'man1', man:'.5', horse:'.3', centaur:'.2', imageUrl:'assets/myth/man1.bmp'},
				{name: 'man2', man:'.4', horse:'.4', centaur:'.2', imageUrl:'assets/myth/man2.bmp'},
				{name: 'horse1', horse:'.7', centaur:'.2', man:'.1', imageUrl:'assets/myth/horse1.bmp'},
				{name: 'horse2', horse:'.6', centaur:'.3', man:'.1', imageUrl:'assets/myth/horse2.bmp'}
			]
		};

		aiData.getData = function() {
			return aiDataSet;
		};

		return aiData;
	}

	angular
		.module('cvapp')
		.factory('aiData', aiData);
})();