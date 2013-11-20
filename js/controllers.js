var scoreApp = angular.module('scoreApp', []).
	config(function($routeProvider){
		$routeProvider.
            when('/games', {templateUrl: 'partials/games.html', controller: 'GamesCtrl'}).
            when('/schedule', {templateUrl: 'partials/schedule.html', controller: 'ScheduleCtrl'}).
            when('/ranking', {templateUrl: 'partials/ranking.html', controller: 'RankingCtrl'}).
            when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
            otherwise({redirectTo: '/home'});
    })

//controllers per pagina//
.controller('HomeCtrl', ['$scope', 'StateService', function ($scope, StateService) {
        $scope.title = 'Home';
        $scope.body = 'This is home body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    }])


.controller('GamesCtrl', ['$scope', 'StateService', function ($scope, StateService) {
        $scope.title = 'Games';
        $scope.body = 'This is the games body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    }])


.controller('ScheduleCtrl', ['$scope', 'StateService', function ($scope, StateService) {
        $scope.title = 'Schedule';
        $scope.body = 'This is the schedule body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);

        
        };        
    }])

.controller('RankingCtrl', ['$scope', 'StateService', function ($scope, StateService) {
        $scope.title = 'Ranking';
        $scope.body = 'This is the ranking body';

        $scope.message = StateService.getMessage();

        $scope.updateMessage = function (m) {
            StateService.setMessage(m);
        };
    }])

.factory('StateService', function () {
        var message = 'Hello Message';
        var getMessage = function() {
            return message;
        };
        var setMessage = function(m) {
            message = m;
        };

        return {
            getMessage: getMessage,
            setMessage: setMessage
        }
    });

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




















