'use strict';

angular.module('myApp')
    .service('employeeService', ['$q', function ($q) {
        var mockData = [];

        var employee1 = new EmployeeViewModel();
        employee1.ID = '13c05ca8-bb90-4444-ac2d-eb97cd9b5abc';
        employee1.GivenName = 'Nhan';
        employee1.FamilyName = 'Nguyen Nhan';
        employee1.Birthday = '1983-06-16T00:00:00';
        employee1.PlaceOfBirthday = 'Da Nang';
        employee1.Team = 'Galaxy';
        employee1.Position = 'Scrum Master';
        employee1.PermenantAddress = '123 Hoang Dieu, Da Nang';
        employee1.CurrentAddress = '126 Hoang Dieu, Da Nang';
        employee1.UserID = 'nhan.nguyen';
        employee1.Phone = '0236623323';
        employee1.Mobile = '0905333111';
        employee1.PersonalEmail = 'nhan.nguyen1606@gmail.com';
        employee1.CompanyEmail = 'nhan.nguyen@axonactive.com';
        employee1.TaxNumber = '123321123321';
        employee1.SkypeID = 'nhannguyen';
        employee1.SocialInsuranceCode = '9988776655';
        employee1.SocialInsurancePlace = '1111122222';

        var employee2 = new EmployeeViewModel();
        employee2.ID = '13c05ca8-bb90-4444-ac2d-eb97cd9b5123';
        employee2.GivenName = 'Quang';
        employee2.FamilyName = 'Nguyen';
        employee2.Birthday = '1985-12-31T00:00:00';
        employee2.PlaceOfBirthday = 'Quang Nam';
        employee2.Team = 'Sparta';
        employee2.Position = 'Developer';
        employee2.PermenantAddress = '05 Hung Vuong, Da Nang';
        employee2.CurrentAddress = '06 Nui Thanh, Da Nang';
        employee2.UserID = 'quang.nguyen';
        employee2.Phone = '';
        employee2.Mobile = '0914223344';
        employee2.PersonalEmail = 'quangnguyen@gmail.com';
        employee2.CompanyEmail = 'quang.nguyen@axonactive.com';
        employee2.TaxNumber = '333222444555';
        employee2.SkypeID = 'quangnguyen';
        employee2.SocialInsuranceCode = '5566778899';
        employee2.SocialInsurancePlace = '2222211111';

        mockData.push(employee1);
        mockData.push(employee2);

        this.getAll = function () {
            var deferred = $q.defer();

            setTimeout(function () {
                deferred.resolve(mockData);
            }, 1000);

            return deferred.promise;
        };

        this.search = function (text) {
            var deferred = $q.defer();

            setTimeout(function () {
                // filter mock data
                var employees = mockData.filter(function(emp) {
                    return emp.GivenName.toLowerCase().indexOf(text.toLowerCase()) > -1;
                });

                deferred.resolve(employees);
            }, 1000);

            return deferred.promise;
        };

        this.getById = function (id) {
            var deferred = $q.defer();

            setTimeout(function () {
                var employee = mockData.find(function (emp) {
                    return emp.ID === id;
                });

                deferred.resolve(employee);
            }, 1000);
            return deferred.promise;
        };

        this.create = function (employee) {
            var deferred = $q.defer();

            setTimeout(function () {
                mockData.push(employee);

                deferred.resolve(employee);
            }, 1000);

            return deferred.promise;
        };

        this.update = function (employee) {
            var deferred = $q.defer();

            setTimeout(function () {
                var existingEmployee = mockData.find(function (emp) {
                    return emp.ID === employee.ID;
                });

                existingEmployee.ID = employee.ID;
                existingEmployee.GivenName = employee.GivenName;
                existingEmployee.FamilyName = employee.FamilyName;
                existingEmployee.Birthday = employee.Birthday;
                existingEmployee.PlaceOfBirthday = employee.PlaceOfBirthday;
                existingEmployee.Team = employee.Team;
                existingEmployee.Position = employee.Position;
                existingEmployee.PermenantAddress = employee.PermenantAddress;
                existingEmployee.CurrentAddress = employee.CurrentAddress;
                existingEmployee.UserID = employee.UserID;
                existingEmployee.Phone = employee.Phone;
                existingEmployee.Mobile = employee.Mobile;
                existingEmployee.PersonalEmail = employee.PersonalEmail;
                existingEmployee.CompanyEmail = employee.CompanyEmail;
                existingEmployee.TaxNumber = employee.TaxNumber;
                existingEmployee.SkypeID = employee.SkypeID;
                existingEmployee.SocialInsuranceCode = employee.SocialInsuranceCode;
                existingEmployee.SocialInsurancePlace = employee.SocialInsurancePlace;

                deferred.resolve(employee);
            }, 1000);

            return deferred.promise;
        };

        this.delete = function (id) {
            var deferred = $q.defer();

            setTimeout(function () {
                mockData = mockData.filter(function (emp) {
                    return emp.ID !== id
                })
                
                deferred.resolve(mockData);
            }, 1000);

            return deferred.promise;
        };
    }]);