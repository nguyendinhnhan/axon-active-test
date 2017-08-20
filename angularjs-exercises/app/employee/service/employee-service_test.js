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
            var employee = {
                ID: '13c05ca8-bb90-4444-ac2d-eb97cd9b5123',
                GivenName: 'test'
            }
            employeeService.update(employee).then(function(emp) {
                expect(emp.GivenName).toEqual('test');
            });
        });

        // Write unit test for Delete function. Fix employeeService if you find bugs
        it('should be delete an employee correctly', function () {
            employeeService.delete('13c05ca8-bb90-4444-ac2d-eb97cd9b5123').then(function(employees) {
                expect(employees.length).toEqual(1);
            });           
        });
    });
});