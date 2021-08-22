// importing Employee const from lib
const Employee = require("./lib/Employee");

// intern constructor extends to employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returns school input 
    getSchool () {
        return this.school;
    }

    // manipulates employee role to intern
    getRole () {
        return "Intern";
    }
}

// exports 
module.exports = Intern; 