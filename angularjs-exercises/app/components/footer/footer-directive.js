'use strict';

angular
    .module('myApp')
    .directive('appFooter', function () {
        return {
            template: ['<footer>',
                '<span>&copy; 2017 - Axon Active</span>',
                '</footer>'].join('')
        };
    });
