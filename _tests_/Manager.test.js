const Manager = require('../lib/Manager.constructor');

test('creates Manager object', () => {
    const manager = new Manager('James', 11, 'jcapado@gmail.com', 1);
    
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.dataRole()).toEqual("Manager");
});
