// Creating the Employee object which will extend to Manager, Engineer, and Intern
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    } 
    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => 'Employee';
};

module.exports = Employee;
