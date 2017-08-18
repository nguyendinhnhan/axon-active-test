'use strict';

angular.module('myApp')
    .controller('EmployeeEditCtrl', ['$routeParams', '$scope', '$location', 'employeeService', function ($routeParams, $scope, $location, employeeService) {      

        $scope.find = function() { 
            employeeService
                .getById($routeParams.ID)
                .then(function(employee) {
                    $scope.employee = employee;
                });
        }

        $scope.update = function(isValid) {
            $scope
            if (!isValid) return;
            employeeService
                .update($scope.employee)
                .then(function() {
                    $scope.gotoSearch();
                });
        }

        $scope.gotoSearch = function() {
            $location.path('/employeeSearch');
        }

    }]);