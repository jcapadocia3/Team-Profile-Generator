// Manager constructor
const Employee = require('./Employee.constructor');

// This constructor will "extend" Employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        // Taking data from Employee constructor
        super (name, id, email); 
        this.officeNum = officeNum; 
    }

    // Changes assigned default role from "Employee" to "Manager"
    dataRole () {
        return 'Manager';
    }
};

module.exports = Manager; 
