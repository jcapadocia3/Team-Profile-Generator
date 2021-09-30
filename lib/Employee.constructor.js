class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    dataName () {
        return this.name;
    }
    dataId () {
        return this.id;
    }   
    dataEmail () {
        return this.email;
    }
    dataRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 