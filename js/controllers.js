var angularComptApp = angular.module('ComptApp', ['ngRoute']);

angularComptApp.config(function ($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'parties/home.html'
    })
    .when('/compte', {
      templateUrl: 'parties/compte.html'
    })
    .when('/deco', {
      templateUrl: 'parties/deco.html'
    })
    .otherwise({
      redirecTo: '/'
    });
});


angularComptApp.controller('logCtrl', function ($scope, $http) {
  $http({
    method: "GET",
    url: "json/users.json"
  }).then(function (response) {
    $scope.users = response.data.records;
    $scope.aUsers = [];
    //Generating array aUsers with structure [id => username]
    for ($user in $scope.users) {
      $scope.aUsers[$scope.users[$user].Id] = $scope.users[$user].username;
    }
  });
});

angularComptApp.controller('postCtrl', function ($scope, $http) {
  $http({
    method: "GET",
    url: "json/depenses.json"
  }).then(function (response) {
    $scope.depenses = response.data.records;
  });
});