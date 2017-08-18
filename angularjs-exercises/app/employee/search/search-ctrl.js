'use strict';

angular.module('myApp')
    .controller('EmployeeSearchCtrl', ['$scope', '$location', 'employeeService', function ($scope, $location, employeeService) {
        
        // Declare variable
        $scope.query = '';
        $scope.employees = [];

        $scope.findAll = function() {  
            employeeService
                .getAll()
                .then(function(allEmployees) {
                    $scope.employees = allEmployees;
                });
        }

        $scope.edit = function(id) {
            $location.path('/employeeEdit/'+id);
        }

        $scope.delete = function(id) {
        	if (confirm('Are you sure!')) {
                employeeService
                    .delete(id)
                    .then(function(employees) {
                        $scope.employees = employees;
                    });
            }
        }

        $scope.search = function() {
            employeeService
                .search($scope.query)
                .then(function(employees) {
                    $scope.employees = employees;
                });
        }
    }]);