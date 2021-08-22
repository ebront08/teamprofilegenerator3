// using Engineer const 
const Engineer = require('../lib/Engineer');

// creating engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('John', 23, 'johndoe08@gmail.com', 'johndoe08');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// retrieves github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('johndoe', 23, 'johndoe08@gmail.com', 'johndoe08');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// retrieves role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('John', 23, 'johndoe08@gmail.com', 'johndoe08');

    expect(engineer.getRole()).toEqual("Engineer");
});
