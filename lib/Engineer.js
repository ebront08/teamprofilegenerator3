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

  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
}

// to be exported
module.exports = Engineer;
