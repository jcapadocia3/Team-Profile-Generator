const Employee = require('../lib/Employee.constructor');

test('creates an employee object', () => {
    const employee = new Employee('James', 11, 'jcapado@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('retrieve ALL employee data', () => {
    const employee = new Employee('James', 11, 'jcapado@gmail.com');

    expect(employee.dataName()).toEqual(expect.any(String));
    expect(employee.dataId()).toEqual(expect.any(Number));
    expect(employee.dataEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.dataRole()).toEqual("Employee");
});

// still need to write test for Engineer "gitHub" property and Intern "school" property