var angularComptApp = angular.module('ComptApp', ['ngRoute']);

angularComptApp.config(function($routeProvider){
    $routeProvider
        .when('/home', {templateUrl: 'parties/home.html'})
        .when('/compte', {templateUrl: 'parties/compte.html'})
        .when('/contact', {templateUrl: 'parties/contact.html'})
        .otherwise({redirecTo : '/'});
});


angularComptaApp.controller('postCtrl', function ($scope) {
    $scope.credits = [{
        'name': 'Créditeur 1',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 2',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 3',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 4',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 5',
        'info': 'Description & date'
    }, {
        'name': 'Créditeur 6',
        'info': 'Description & date'
    }]
});