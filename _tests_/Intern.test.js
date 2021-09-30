const Intern = require('../lib/Intern.constructor');

test('creates Intern object', () => {
    const intern = new Intern('James', 11, 'jcapado@gmail.com', 'northwestern');
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.dataRole()).toEqual("Intern");
});
