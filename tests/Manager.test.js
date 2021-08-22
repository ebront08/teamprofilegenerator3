// using Manager const
const Manager = require('../lib/Manager');

// creates manager object  
test('creates an Manager object', () => {
    const manager = new Manager('John', 1914, 'johndoe@bluehatenterprises.org', johndoe1914);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// retrieves role from getRole
test('gets role of employee', () => {
    const manager = new Manager('John', 1914, 'johndoe@bluehatenterprises.org');

    expect(manager.getRole()).toEqual("Manager");
}); 