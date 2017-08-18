'use strict';

angular
    .module('myApp')
    .directive('appHeader', function () {
        return {
            controller: ['$scope', function($scope) {
                $scope.collapseOrExpandSidebar = function() {
                    // implement collapse or expand sidebar here
                    // console.log('implement collapse or expand sidebar here');
                };
            }],
            templateUrl: './components/header/header-directive-template.html'
        };
    });
