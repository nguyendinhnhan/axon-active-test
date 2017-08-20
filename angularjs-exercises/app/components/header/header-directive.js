'use strict';

angular
    .module('myApp')
    .directive('appHeader', function () {
        return {
            controller: ['$scope', function($scope) {
                $scope.collapseOrExpandSidebar = function() {
                    // implement collapse or expand sidebar here
                    var elAsideLeft = document.getElementById('aside-left');
                    var elContentMain = document.getElementById('content-main');
                    var elNavbarLeft = document.getElementById('navbar-left');
                    
                    if (elAsideLeft.style.display == 'none') {
                        elAsideLeft.style.display = 'block';
                        elNavbarLeft.style.display = 'block';
                        elContentMain.style.marginLeft = '220px';
                    } else {
                        elAsideLeft.style.display = 'none';
                        elNavbarLeft.style.display = 'none';
                        elContentMain.style.marginLeft = '0px';
                    }
                };
            }],
            templateUrl: './components/header/header-directive-template.html'
        };
    });
