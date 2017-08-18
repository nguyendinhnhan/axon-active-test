'use strict';

describe('myApp', function () {

  beforeEach(module('myApp'));

  describe('EmployeeEdit controller', function () {

    it('should be created without any errors', inject(function ($controller) {
      //spec body
      var $scope = {};
      var employeeEditCtrl = $controller('EmployeeEditCtrl', { $scope: $scope });

      expect(employeeEditCtrl).toBeDefined();
    }));

  });
});