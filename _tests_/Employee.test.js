const Employee = require('../lib/Employee.constructor');

test('creates an employee object', () => {
    const employee = new Employee('James', 11, 'jcapado@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.dataRole()).toEqual("Employee");
});
