const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub = () => this.github;
    getRole = () => 'Engineer';
    static getAttributes = () => ['name', 'id', 'email', 'github', 'role'];
};

module.exports = Engineer;
