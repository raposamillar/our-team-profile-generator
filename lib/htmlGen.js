const { writeFile } = require('fs');

const htmlGen = ({ Managers, Engineers, Interns }) => {
  let output = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/fontawesome.min.css" integrity="sha512-RvQxwf+3zJuNwl4e0sZjQeX7kUa3o82bDETpgVCH2RiwYSZVDdFJ7N/woNigN/ldyOOoKw8584jM4plQdt8bhA==" crossorigin="anonymous" referrerpolicy="no-referrer" />    
    <link rel="stylesheet" href="style.css">
    <title>Team Excel Profile Generator</title>
  </head> 
  <body>
    <nav>
      <h1>TEAM EXCEL PROFILE GENERATOR</h1>
    </nav>
    <main>
    <h1>Managers</h1>
    <hr>
      <div class="managers">
        <div class="card">
          <header>
            <h2>Jared</h2>
            <h3>Manager</h3>
            <i class="fa-solid fa-mug-saucer"></i>
          </header>
          <h5>ID: 1</h5>
          <h5>Email: <a href="">test@test.com</a></h5>
          <h5>Office number: 1</h5>
        </div>
      </div>
      <h1>Engineers</h1>
      <hr>
      <div class="engineers">
        <div class="card">
          <header>
            <h2>Jared</h2>
            <h3>Engineer</h3>
            <i class="fa-solid fa-glasses"></i>
          </header>
          <h5>ID: 1</h5>
          <h5>Email: <a href="">test@test.com</a></h5>
          <h5>Github: <a href="">test@test.com</a></h5>
        </div>
      </div>
      <h1>Interns</h1>
      <hr>
      <div class="interns">
        <div class="card">
          <header>
            <h2>Jared</h2>
            <h3>Intern</h3>
            <i class="fa-solid fa-user-graduate"></i>
          </header>
          <h5>ID: 1</h5>
          <h5>Email: <a href="">test@test.com</a></h5>
          <h5>School: mySchool </h5>
        </div>
      </div>
    </main>
  </body>
  </html>
  `;


  writeFile('./dist/team-excel.html', output, ()=>console.log('Created team excel html file...'));
  
};

module.exports = htmlGen;
