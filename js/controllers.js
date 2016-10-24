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

  angularComptApp.controller('registerCtrl', function ($scope) {
  $scope.showAlert = function (ev) {

    $mdDialog.show(
      $mdDialog.alert()
      .parent(angular.element(document.querySelector('#popupContainer')))
      .clickOutsideToClose(true)
      .title('Ici le formulaire d\'inscription en popup.')
      .textContent('Vous êtes bien inscrit.')
      .ariaLabel('Alert Dialog Demo')
      .ok('Got it!')
      .targetEvent(ev)
    )};
  });