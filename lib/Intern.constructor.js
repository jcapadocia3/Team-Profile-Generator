// Intern constructor
const Employee = require('./Employee.constructor');

// This constructor will "extend" Employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // Taking data from Employee constructor
        super (name, id, email);
        this.school = school; 
    }

    // Changes assigned default role from "Employee" to "Intern"
    dataRole () {
        return "Intern";
    }
};

module.exports = Intern; 
