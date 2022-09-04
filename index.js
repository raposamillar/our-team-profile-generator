const { prompt } = require('inquirer');

prompt([
  {
    type: "confirm",
    name: "fillPosition",
    message: "Would you like to fill a position?"
  },
  {
    type: "list",
    name: "role",
    message: "What position would you like to fill?",
    choices: ["Manager", "Engineer", "Intern"],
    when: ({fillPosition}) => fillPosition
  },
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's id?"
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?"
  }
])

