// Employee constructor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Assigns default role as "Employee"
    dataRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 
