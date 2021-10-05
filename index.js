const generateHTML = require("./utils/generateHTML");
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager.constructor");
const Engineer = require("./lib/Engineer.constructor");
const Intern = require("./lib/Intern.constructor");

// Empty team array for user input collected to be "pushed into"
const teamArray = [];

// Begin prompts from inquirer to take user input
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

    // Creates employees based on user input and selections
    .then((employeeData) => {

        // All employee data possibilities
        let { name, id, email, role, officeNum, gitHub, school, confirmAdd } =
          employeeData;
        let employee;
      
        // Depending on user choice for employee "role," an employee is created using the class constructors, limited to specific data for each employee type
        if (role === "Manager") {
          employee = new Manager(name, id, email, officeNum);
      
        } else if (role === "Engineer") {
          employee = new Engineer(name, id, email, gitHub);
      
        } else if (role === "Intern") {
          employee = new Intern(name, id, email, school);
        }
      
        // Push new employee created into empty array
        teamArray.push(employee);
      
        // If user chooses to add another employee to the team, rerun the inquirer prompts
        if (confirmAdd) {
          return addEmployee(teamArray);
        } else {
          console.log(teamArray)
          return teamArray;
        }
    });
};

// Begin function to create .html file
const writeHTML = data => {
  fs.writeFile('./dist/newINDEX.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log("Team profile created -- Please refer to newINDEX.html")
      }
  })
}; 

// Call on functions from beginning to end of index.js code
addEmployee()
.then(teamArray => {
  return generateHTML(teamArray);
})
.then(htmlData => {
  return writeHTML(htmlData);
})
.catch(err => {
console.log(err);
});
