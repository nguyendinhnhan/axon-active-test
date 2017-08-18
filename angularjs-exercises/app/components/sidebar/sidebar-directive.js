'use strict';

angular
    .module('myApp')
    .directive('appSidebar', function () {
        return {
            templateUrl: './components/sidebar/sidebar-directive-template.html'
        };
    });
