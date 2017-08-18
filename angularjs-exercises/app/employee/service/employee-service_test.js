'use strict';

describe('myApp', function () {
    var employeeService;

    beforeEach(module('myApp'));

    beforeEach(inject(function (_employeeService_) {
        employeeService = _employeeService_;
    }));

    describe('Employee service', function () {
        it('should be created without any errors', function () {
            expect(employeeService).toBeDefined();
        });
   
        it('should be return all employees', function () {
            employeeService.getAll().then(function(allEmployees) {               
                expect(allEmployees.length).toEqual(2);                
            });            
        });

        it('should be get an employee correctly', function () {
            employeeService.getById('13c05ca8-bb90-4444-ac2d-eb97cd9b5123').then(function(employee) {               
                expect(employee.GivenName).toEqual('Quang');                
            });            
        });

        // Write unit test for Update function. Fix employeeService if you find bugs
        it('should be update an employee correctly', function () {
            expect(1).toEqual(1); // remove this line after you modify this unit test           
        });

        // Write unit test for Delete function. Fix employeeService if you find bugs
        it('should be delete an employee correctly', function () {
            expect(1).toEqual(1); // remove this line after you modify this unit test           
        });
    });
});