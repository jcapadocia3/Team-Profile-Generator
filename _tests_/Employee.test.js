const Employee = require('../lib/Employee.constructor');

// Creates test employee object based on Employee Constructor
test('creates an employee object', () => {
    const employee = new Employee('James', 11, 'jcapado@gmail.com');

    // Uses test object created to ensure object properties are consistent
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.dataRole()).toEqual("Employee");
});
