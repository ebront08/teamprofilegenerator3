// / TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Software Engineering team
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
// generate html
const generateHTML = require("./src/createHTML");
// TODO: Create an array of questions for user input
const teamArray = [];
// Manager questions that will be prompted
const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Team Manager's Name?",
      },
      {
        type: "input",
        name: "managerID",
        message: "What's your Team Manager's Employee ID?",
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What's your Team Manager's Email?",
      },
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "What's your Team Manager's Office Number?",
      },
    ])
    .then((managerInput) => {
      const { managerName, managerID, managerEmail, managerOfficeNumber } =
        managerInput;
      const manager = new Manager(
        managerName,
        managerID,
        managerEmail,
        managerOfficeNumber
      );

      teamArray.push(manager);
      console.log(manager);
    });
};

// Employee prompts 
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select between the following roles.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "Enter the name of the employee.",
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID number?'",
      },
      {
        type: "input",
        name: "email",
        message: "What is this Engineer or Intern's email address?",
      },
      {
        type: "input",
        name: "github",
        message: "Enter their github username.",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "Enter the school the Intern attends.",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAddEmployee",
        message: "Is there anyone else you would like to add?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let { name, id, school, github, role, email, confirmAddEmployee } =
        employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, github, email);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, school, email);
        console.log(employee);
      }
      teamArray.push(employee);
      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    });
};

// This function will generate a HTML page
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    console.log(data),
      err
        ? console.log(err)
        : console.log("Created a HTML with data for the team.");
  });
};


addManager()
  .then(addEmployee)
  .then((teamArray) => {
    return generateHTML(teamArray);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((err) => {
    console.log(err);
  });
