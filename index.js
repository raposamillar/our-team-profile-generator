const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const htmlGen = require('./lib/htmlGen.js');
const fs = require('fs');
const path = require('path');
const DIST_DIR = path.resolve(__dirname, "dist")
const distPath = path.join(DIST_DIR, "team-excel.html");
const teamMembers = [];

const namePrompt = {
  type: 'input',
  name: 'name',
  message: 'What is your name? (Required)',
  validate: nameInput => {
    if (nameInput) {
      return true;
    } else {
      console.log('Please enter your name!');
      return false;
    }
  }
};

const idPrompt = {
      type: 'input',
      name: 'id',
      message: 'Enter your employee ID (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your employee ID!')
          return false;
        }
      }
    };

const emailPrompt = {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (Required)',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
    };


// series of questions
const promptManager = () => {
  return inquirer.prompt([
    namePrompt,
    idPrompt,
    emailPrompt,
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter your office number (Required)',
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log('Please enter your office number!');
          return false;
        }
      }
    }
  ]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
  })
};

const promptMenu = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Please select which option you would like to continue with:',
      choices: ['add an engineer', 'add an intern', 'finish building my team']
    }])
    .then(userChoice => {
      switch (userChoice.menu) {
        case "add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  console.log(`
  ==================
  Add a New Engineer
  ==================
  `);
attrs = Engineer.getAttributes();

  return inquirer.prompt([
    namePrompt,
    idPrompt,
    emailPrompt,
    {
        type: 'input',
        name: 'github',
        message: 'What is the GitHub username of the engineer? (Required)',
        validate: engineergithub => {
          if (engineergithub) {
            return true;
          } else {
            console.log('Please enter the GitHub username of the engineer!');
            return false;
          }
        }
    }
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamMembers.push(engineer);
    promptMenu();
  })
};

const promptIntern = () => {
console.log(`
================
Add a New Intern
================
`);

  return inquirer.prompt([
    namePrompt,
    idPrompt,
    emailPrompt,
    {
      type: 'input',
      name: 'school',
      message: 'What is the school name of the intern? (Required)',
      validate: internSchool => {
        if (internSchool) {
          return true;
        } else {
          console.log('Please enter the school name of the intern!');
          return false;
        }
      }
    }
 ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    teamMembers.push(intern);
    promptMenu();
  })
};

const buildTeam = () => {
  console.log(`
  ===========================
  Finished building our team!
  ===========================
  `);

  // Create the dist directory
  if (!fs.existsSync(DIST_DIR)) {
    fs.mkdirSync(DIST_DIR)
  }
  fs.writeFileSync(distPath, htmlGen(teamMembers), "utf-8");
}

promptManager();
