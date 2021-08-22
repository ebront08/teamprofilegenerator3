// imports Employee const from lib
const Employee = require("./lib/Employee");


class Engineer extends Employee {
  constructor(name, id, email, github) {
    
    super(name, id, email);

    this.github = github;
  }

  // returns github from input
  getGithub() {
    return this.github;
  }

  // manipulates employee role to engineer
  getRole() {
    return "Engineer";
  }
}

// exports
module.exports = Engineer;
