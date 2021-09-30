const Employee = require('./Employee.constructor');

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school; 
    }
    dataSchool () {
        return this.school;
    }
    dataRole () {
        return "Intern";
    }
}

module.exports = Intern; 
