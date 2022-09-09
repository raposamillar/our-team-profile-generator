const generateTeam = (team) => {
  console.log(team);
  // Create an empty array to push html elements into and loop through the team data
  const html = [];
  // Create functions for each type of employee and have them return HTML data
  const generateManager = manager => {
    console.log(manager);
    let managerHtml = `
    <div class ="card" style="width: 18rem;">
      <div id="card-header" id="managers">
      <h2>${manager.name}<h2> </br>
      <i class="fas fa-mug-hot"></i> Manager</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li></br>
        <li class="list-group-item">Email: <span id="email"><a target="_blank" href="mailto:${manager.email}">${manager.email}</a></span></li></br>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>  
      <hr>
      `;
      html.push(managerHtml);
  }

  const generateEngineer = engineer => {
    console.log(engineer);
    let engineerHtml = `
    <div class="card" style="width: 18rem;">
      <div id="card-header" class="engineers">
      <h2>${engineer.name}</h2></br>
      <i class="fas fa-glasses"></i> Engineer</div>
      <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li></br>
      <li class="list-group-item">Email: <span id="email"><a target="_blank" href="mailto:${engineer.email}">${engineer.email}</a></span></li></br>
      <li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github} </a></li>
      </ul>
    </div>  
    <hr>
    `;
    html.push(engineerHtml);
  }
  const generateIntern = intern => {
    console.log(intern);
    let internHtml = `
    <div class="card" style="width: 18rem;">
      <div id="card-header" class="interns">
      <h2>${intern.name}</h2> </br>
      <i class="fas fa-user-graduate"></i> Intern</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li></br>
        <li class="list-group-item">Email: <span id="email"><a target="_blank" href="mailto:${intern.email}">${intern.email}</a></span></li></br>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
    <hr>
    `;
    html.push(internHtml);
  }
  // create a loop for all of the employees
  for (let i = 0; i < team.length; i++) {
    if (team[i].getRole() === "Manager") {
      generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
      generateEngineer(team[i]);
    }
    if (team[i].getRole() === "Intern") {
      generateIntern(team[i]);
    }
  }

  // join the HTML blocks
  return html.join('');
}
// export function to generate webpage
module.exports = team => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../dist/style.css">
    <title>Team Excel Profile Generator</title>
  </head> 
  <body>
    <header>
    <h1>Our Team</h1>
    </header>
    

    <main> ${generateTeam(team)} </main>

  </body>
  </html>
  `;
}
