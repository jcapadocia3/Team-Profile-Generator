const Engineer = require('../lib/Engineer.constructor');

// Creates test engineer object based on Engineer Constructor
test('creates Engineer object', () => {
    const engineer = new Engineer('James', 11, 'jcapado@gmail.com', 'jcapado');
    
    // Uses test object created to ensure object properties are consistent
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.dataRole()).toEqual("Engineer");
});
