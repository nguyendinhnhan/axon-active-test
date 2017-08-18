'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'ngMessages'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/employeeSearch', {
    templateUrl: 'employee/search/search-template.html',
    controller: 'EmployeeSearchCtrl'
  });
  
  $routeProvider.when('/employeeEdit/:ID', {
    templateUrl: 'employee/edit/edit-template.html',
    controller: 'EmployeeEditCtrl'
  });

  $routeProvider.otherwise({redirectTo: '/employeeSearch'});
}]);
