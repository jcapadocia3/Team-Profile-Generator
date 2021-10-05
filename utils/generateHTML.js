// Code to create a manager card on .html generated
const createManager = function (manager) {
  return `
    <div class="card" style="width: 18rem">
      <div class="card-header">
        <h2>${manager.name}</h2>
        <h3><i class="fas fa-mug-hot"></i>  Manager</h3>
      </div>
      <div class="card-body">
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>Office #: ${manager.officeNum}</p>
      </div>
    </div>
    `;
};

// Code to create an engineer card on .html generated
const createEngineer = function (engineer) {
  return `
    <div class="card" style="width: 18rem">
      <div class="card-header">
        <h2>${engineer.name}</h2>
        <h3><i class="fas fa-tools"></i>  Engineer</h3>
      </div>
      <div class="card-body">
        <p>ID: ${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>GitHub Username: ${engineer.gitHub}</p>
      </div>
    </div>
    `;
};

// Code to create an intern card on .html generated
const createIntern = function (intern) {
  return `
    <div class="card" style="width: 18rem">
      <div class="card-header">
        <h2>${intern.name}</h2>
        <h3><i class="fas fa-user-graduate"></i>  Intern</h3>
      </div>
      <div class="card-body">
        <p>ID: ${intern.id}</p>
        <p>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School Attending: ${intern.school}</p>
      </div>
    </div>
    `;
};

// Begin pushing array to .html file
generateHTML = (data) => {
  htmlArray = [];

  // Begin loop for all employees added via user input to distinguish what role was selected and what employee card should be created
  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.dataRole();

    if (role === "Manager") {
      const managerCard = createManager(employee);

      htmlArray.push(managerCard);
    }

    if (role === "Engineer") {
      const engineerCard = createEngineer(employee);

      htmlArray.push(engineerCard);
    }

    if (role === "Intern") {
      const internCard = createIntern(employee);

      htmlArray.push(internCard);
    }
  }

  // Begin joining all employee cards created into one string
  const employeeCards = htmlArray.join("");

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

// Code to create .html framework and where employee cards created will be pushed into
const generateTeamPage = function (employeeCards) {
  return `
    <!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Team Profile</title>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
    />
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header>
      <nav class="navbar-brand mb-0 h1" id="myTeam">My Team</nav>
    </header>

    <main class="bigContainer">

      <div class="littleContainer">
        ${employeeCards}
      </div>

    </main>
  </body>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
</html>
  `;
};

module.exports = generateHTML;
