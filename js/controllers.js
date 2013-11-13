var scoreApp = angular.module('scoreApp', []);
 
scoreApp.controller('ScheduleListController', function ScheduleListController($scope) {
 
	var accessToken = '82996312dc';
	var tournamentID = '19389';


	$scope.loadGames = function(){
		console.log("functie is bereikt");
		


		 var jsonRequestURL = 'https://api.leaguevine.com/v1/games/?tournament_id='+ tournamentID +'&access_token=' + accessToken;
		 console.log(jsonRequestURL);
		 $http.get(jsonRequestURL).then(function(response) {
      	console.log(response);
         });
	};
	
	$scope.config(function($routeProvider) {
		$routeProvider.when('/games', {
			templateUrl: 'games.html',
			controller: 'LoginController'
		});

		$routeProvider.otherwise({ redirectTo : '/login'});
	});

	$scope.controller('LoginController', function(){

	});



	$scope.naam = "Bastiaan en Anne";
});

