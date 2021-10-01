// Engineer constructor
const Employee = require('./Employee.constructor');

// This constructor will "extend" Employee constructor
class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        // Taking data from Employee constructor
        super (name, id, email);
        this.gitHub = gitHub; 
    }

    // Changes assigned default role from "Employee" to "Engineer"
    dataRole () {
        return "Engineer";
    }
};

module.exports = Engineer; 
