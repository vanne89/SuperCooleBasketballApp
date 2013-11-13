var scoreApp = angular.module('scoreApp', []);
 
scoreApp.controller('ScheduleListController', function ScheduleListController($scope, $http) {
 
	var accessToken = '82996312dc';
	var tournamentID = '19389';
	
	$scope.games = [];

 
	var jsonRequestURL = 'https://api.leaguevine.com/v1/games/?tournament_id='+ tournamentID +'&access_token=' + accessToken;
	console.log(jsonRequestURL);
$http({method: 'GET', url: jsonRequestURL}).
  success(function(data, status, headers, config) {
 console.log(data.objects);
 var strippedData = data.objects;
for (var i = 0; i < strippedData.length; i++) {
	var game = [];
	game.date = strippedData[i].start_time;
	game.team_1 = strippedData[i].team_1.name;
	game.team_2 = strippedData[i].team_2.name;


	console.log(game.date + "  " + game.team_1 + " vs. " + game.team_2);

	$scope.games.push(game);
};
 console.log(games);


  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });





});

