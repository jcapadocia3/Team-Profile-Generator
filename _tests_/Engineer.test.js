const Engineer = require('../lib/Engineer.constructor');

test('creates Engineer object', () => {
    const engineer = new Engineer('James', 11, 'jcapado@gmail.com', 'jcapado');
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));
    expect(engineer.dataRole()).toEqual("Engineer");
});
