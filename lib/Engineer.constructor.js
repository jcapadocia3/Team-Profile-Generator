const Employee = require('./Employee.constructor');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super (name, id, email);
        this.gitHub = gitHub; 
    }
    dataGithub () {
        return this.gitHub;
    }
    dataRole () {
        return "Engineer";
    }
}

module.exports = Engineer; 