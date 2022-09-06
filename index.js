const { prompt } = require('inquirer');
const { questions, htmlGen } = require('./lib');

prompt(questions).then(htmlGen);
