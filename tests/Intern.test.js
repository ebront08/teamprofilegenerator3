// using Intern const
const Intern = require('../lib/Intern');

// creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('James',800420808, 'doeja@unc.edu', 'UNC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// retrieves school from getSchool()
test('gets employee school', () => {
    const intern = new Intern('James',800420808, 'doeja@unc.edu', 'UNC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// retrieves role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('James', 800420808, 'doeja@unc.edu', 'UNC');

    expect(intern.getRole()).toEqual("Intern");
}); 