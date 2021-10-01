const createManager = function (manager) {
  return `
    <div class="card" style="width: 18rem">
      <div class="card-header">
        <h2>${manager.name}</h2>
        <h3>Manager</h3>
      </div>
      <div class="card-body">
        <p>ID: ${manager.id}</p>
        <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p>Office #: ${manager.officeNum}</p>
      </div>
    </div>
    `;
};

generateHTML = (data) => {
  htmlArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.dataRole();

    if (role === "Manager") {
      const managerCard = createManager(employee);

      htmlArray.push(managerCard);
    }
  }

  const employeeCards = htmlArray.join("");

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;
};

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
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">My Team</span>
        </div>
      </nav>
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
