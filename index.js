// const generateHTML = require("./src/generateHTML");
// const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.constructor");
const Engineer = require("./lib/Engineer.constructor");
const Intern = require("./lib/Intern.constructor");

const teamArray = [];

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email?",
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?",
        when: (input) => input.role === "Manager",
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's GitHub username?",
        when: (input) => input.role === "Engineer",
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        when: (input) => input.role === "Intern",
      },
      {
        type: "confirm",
        name: "confirmAdd",
        message: "Do you need to add more team members?",
        default: false,
      },
    ])

    .then((employeeData) => {

        let { name, id, email, role, officeNum, gitHub, school, confirmAdd } =
          employeeData;
        let employee;
      
        if (role === "Manager") {
          employee = new Manager(name, id, email, officeNum);
          console.log(employee);
      
        } else if (role === "Engineer") {
          employee = new Engineer(name, id, email, gitHub);
          console.log(employee);
      
        } else if (role === "Intern") {
          employee = new Intern(name, id, email, school);
          console.log(employee);
        }
      
        teamArray.push(employee);
      
        if (confirmAdd) {
          return addEmployee(teamArray);
        } else {
          console.log(teamArray)
          return teamArray;
        }
    });
};
      
addEmployee();
