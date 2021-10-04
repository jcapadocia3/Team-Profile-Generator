const Manager = require('../lib/Manager.constructor');

// Creates test manager object based on Manager Constructor
test('creates Manager object', () => {
    const manager = new Manager('James', 11, 'jcapado@gmail.com', 1);
    
    // Uses test object created to ensure object properties are consistent
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.dataRole()).toEqual("Manager");
});
