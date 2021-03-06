// using Employee constructor 
const Employee = require('../lib/Employee');

// creates an employee object 
test('creates an employee object', () => {
    const employee = new Employee("John",1914, 'johndoe@bluehatenterprises.org');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// retrieves id from getId() 
test('gets employee name', () => {
    const employee = new Employee('John', 1914, 'johndoe@bluehatenterprises.org');

    expect(employee.getName()).toEqual(expect.any(String));
});

// retrieves id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('John', 1914, 'johndoe@bluehatenterprises.org');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// retrieves emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('John', 1914, 'johndoe08@bluehatenterprises.org');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// retrieves role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('John', 1914, 'johndoe@bluehatenterprises.org');

    expect(employee.getRole()).toEqual("Employee");
}); 