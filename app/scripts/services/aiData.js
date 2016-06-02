(function() {
	function aiData() {
		var aiData = {};
		var aiDataSet = {
			images: [
				{label1: 'Centaur', value1: '.5', label2: 'Man', value2:'.3', label3: 'Horse', value3:'.2', imageUrl:'assets/myth/centaur1.bmp'},
				{label1: 'Centaur', value1: '.6', label2: 'Man', value2:'.2', label3: 'Horse', value3:'.2', imageUrl:'assets/myth/centaur3.bmp'},
				{label1: 'Centaur', value1: '.3', label2: 'Man', value2:'.5', label3: 'Horse', value3:'.2', imageUrl:'assets/myth/Man1.bmp'},
				{label1: 'Centaur', value1: '.2', label2: 'Man', value2:'.5', label3: 'Horse', value3:'.3', imageUrl:'assets/myth/Man2.bmp'},
				{label1: 'Centaur', value1: '.2', label2: 'Man', value2:'.1', label3: 'Horse', value3:'.7', imageUrl:'assets/myth/Horse1.bmp'},
				{label1: 'Centaur', value1: '.3', label2: 'Man', value2:'.1', label3: 'Horse', value3:'.6', imageUrl:'assets/myth/Horse2.bmp'}
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