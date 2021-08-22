// / TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");



// Software Engineering team
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
// generate html 
const generateHTML = require('./dist/generateHTML')
// TODO: Create an array of questions for user input

const addManager = () => {
  return inquirer.prompt ([{
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
  {
    type: "input",
    name: "InternOrEngineer",
    message: "Choose between the Intern or Engineer.",
    options: ["Engineer", "Intern"]
  },
  {
    type: "input",
    name: "license",
    message: "What licensing process would be needed for your project?",
  },
  {
    type: "input",
    name: "contributions",
    message: "Who were the contributors to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "How did you confirm the validity of your project?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
    {

    }
  ]

  )
}

    

// call if needed as many as times
const questions = [
    {
      type: "input",
      name: "InternOrEngineerName",
      message: "Team InternOrEngineer's Name?",
    },
    {
      type: "input",
      name: "InternOrEngineerID",
      message: "What's your Team InternOrEngineer's Employee ID?",
    },
    {
      type: "input",
      name: "InternOrEngineerEmail",
      message: "What's your Team InternOrEngineer's Email?",
    },
    {
      type: "input",
      name: "InternOrEngineerOfficeNumber",
      message: "What's your Team InternOrEngineer's Office Number?",
    },
    {
      type: "input",
      name: "InternOrEngineer",
      message: "Choose between the intern or engineer.",
      options: ["Engineer", "Intern"]
    },
  ];
