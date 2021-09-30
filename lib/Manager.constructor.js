const Employee = require('./Employee.constructor');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super (name, id, email); 
        this.officeNum = officeNum; 
    }
    dataRole () {
        return 'Manager';
    }
}

module.exports = Manager; 