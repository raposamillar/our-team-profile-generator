const { prompt } = require('inquirer');

prompt([
  {
    type: "confirm",
    name: "fillPosition",
    message: "Would you like to fill a position?",
    default: true
  },
  {
    type: "list",
    name: "role",
    message: "What position would you like to fill?",
    choices: ["Manager", "Engineer", "Intern"],
    when: ({ fillPosition }) => fillPosition
  },
  {
    type: "input",
    name: "name",
    message: "What is the employee's name? (Required)",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a name!');
        return false;  
      }
    }
  },
  {
    type: "input",
    name: "id",
    message: "What is the employee's id? (Required)",
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log('Please enter an id!');
        return false;
      }  
    }
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email? (Required)",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter an email!');
        return false;
      }  
    }
  }
])

