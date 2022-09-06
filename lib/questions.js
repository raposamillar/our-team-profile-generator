const questions = [
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
    message: "What is the employee's name?",
    when: ({fillPosition}) => fillPosition
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's id?",
    when: ({fillPosition}) => fillPosition
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email?",
    when: ({fillPosition}) => fillPosition
  },
  {
    type: "input",
    name: "officeNumber",
    message: "What is the manager's office number?",
    when: ({role}) => role == "Manager"
  },
  {
    type: "input",
    name: "github",
    message: "What is the engineer's GitHub username?",
    when: ({role}) => role == "Engineer"
  },
  {
    type: "input",
    name: "school",
    message: "What is the intern's school name?",
    when: ({role}) => role == "Intern"
  }
];

module.exports = questions;
