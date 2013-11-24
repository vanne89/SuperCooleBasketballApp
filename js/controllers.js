 var accessToken = '82996312dc';
 var tournamentID = '19389';


var scoreApp = angular.module('scoreApp', []).
	config(function($routeProvider){
		$routeProvider.
            when('/games', {templateUrl: 'partials/games.html', controller: 'GamesCtrl'}).
            when('/schedule', {templateUrl: 'partials/schedule.html', controller: 'ScheduleCtrl'}).
            when('/ranking', {templateUrl: 'partials/ranking.html', controller: 'RankingCtrl'}).
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            when('/game/:id', {templateUrl: 'partials/game.html', controller: 'GameCtrl'}).
            otherwise({redirectTo: '/home'});
    });

//controllers per pagina//
 
    scoreApp.controller('HomeCtrl', ['$scope', function ($scope) {
        console.log("Has arrived at HomeController");

    }]);

    scoreApp.controller('GameCtrl', ['$scope', '$routeParams', '$http', function ($scope, $routeParams, $http){
    $scope.team_1 = "Loading..";
    $scope.team_2 = "Loading.."
    $scope.score_team_1 = "..";
    $scope.score_team_2 = "..";

        var jsonRequestURL = 'https://api.leaguevine.com/v1/games/'+$routeParams.id+'/?access_token=' + accessToken;

        $http({method: 'GET', url: jsonRequestURL}).
        success(function(data, status, headers, config) {
            console.log(data);
            $scope.team_1 = data.team_1.name;
            $scope.team_2 = data.team_2.name;
            $scope.score_team_1 = data.team_1_score;
            $scope.score_team_2 = data.team_2_score;

  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  $scope.addScoreTeam1 = function(){$scope.score_team_1++; updateScores();};
  $scope.addScoreTeam2 = function(){$scope.score_team_2++; updateScores();};
  $scope.removeScoreTeam1 = function(){$scope.score_team_1--; updateScores();};
  $scope.removeScoreTeam2 = function(){$scope.score_team_2--; updateScores();};

 function updateScores(){
    var post = [];
    post.game_id = $routeParams.id;
    post.team_1_score = $scope.score_team_1;
    post.team_2_score = $scope.score_team_2;
    post.is_final = false;


    var url = 'https://api.leaguevine.com/v1/game_scores/?access_token=' + accessToken + '?callback?';
    $http.post(url , post, {headers: {'Authorization': 'bearer ' + accessToken}}).success(
                    function(){
                        alert('gepost ouwe!!');
                    }

                );
};
    }]);
    

    scoreApp.controller('RankingCtrl', ['$scope', function ($scope) {
        console.log("Has arrived at RankingController");

    }]);

     scoreApp.controller('GamesCtrl', ['$scope', '$http', '$location', function ($scope, $http, $location) {
        $scope.games = [];

        var jsonRequestURL = 'https://api.leaguevine.com/v1/games/?tournament_id='+ tournamentID +'&limit=50&access_token=' + accessToken;
        $http({method: 'GET', url: jsonRequestURL}).
        success(function(data, status, headers, config) {
         var strippedData = data.objects;
        for (var i = 0; i < strippedData.length; i++) {
        var game = [];
        game.id = strippedData[i].id;
        game.date = strippedData[i].start_time;
        game.team_1 = strippedData[i].team_1.name;
        game.team_2 = strippedData[i].team_2.name;
        game.score_team_1 = strippedData[i].team_1_score;
        game.score_team_2 = strippedData[i].team_2_score;
        game.pool = strippedData[i].pool.name;


        console.log(game.date + "  " + game.team_1 + " vs. " + game.team_2);

        $scope.games.push(game);
        };

    

  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

  $scope.editScoreOfGame = function(id){
        $location.path('/game/' + id);
      }
      
    }]);

    scoreApp.controller('ScheduleCtrl', function ScheduleListController($scope, $http) {
 
        $scope.loadingGif = '<img src="img/loading.GIF"> </img>';    
        $scope.games = [];



        var jsonRequestURL = 'https://api.leaguevine.com/v1/games/?tournament_id='+ tournamentID +'&limit=50&access_token=' + accessToken;
        $http({method: 'GET', url: jsonRequestURL}).
        success(function(data, status, headers, config) {
  

        var strippedData = data.objects;
        for (var i = 0; i < strippedData.length; i++) {
        var game = [];
        game.date = strippedData[i].start_time;
        game.team_1 = strippedData[i].team_1.name;
        game.team_2 = strippedData[i].team_2.name;


        console.log(game.date + "  " + game.team_1 + " vs. " + game.team_2);

        $scope.games.push(game);
};
 console.log($scope.games);


  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });





});


















