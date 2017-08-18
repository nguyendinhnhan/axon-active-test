'use strict';

describe('myApp', function () {

  beforeEach(module('myApp'));

  describe('EmployeeSearch controller', function () {

    it('should be created without any errors', inject(function ($controller) {
      //spec body
      var $scope = {};
      var employeeSearchCtrl = $controller('EmployeeSearchCtrl', { $scope: $scope });

      expect(employeeSearchCtrl).toBeDefined();
    }));

  });
});