(function() {
	function config($stateProvider, $locationProvider) {
	     $locationProvider
	         .html5Mode({
	             enabled: true,
	             requireBase: false
         });

		$stateProvider
			.state('landing', {
				url: '/',
				controller: 'LandingCtrl as landing',
				templateUrl: '/templates/landing.html'
			})

			.state('cvtrainer', {
				url: '/cvtrainer',
				controller: 'CVTrainerCtrl as cvtrainer',
				templateUrl: '/templates/cvtrainer.html'
			})
	}

	angular
		.module('cvapp', ['ui.router', 'googlechart', 'firebase'])
		.config(config);

})();


