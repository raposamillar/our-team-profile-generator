// export function to generate entire page
module.exports = templateData => {
  // destructure page data by card
  const { cards, header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <metaname="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Excel Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <body>
  <header>
    <div class="container flex-row justify-space-between align-center py-3">
      <h1 class="page-title text-light bg-danger py-3">${header.name}</h1>
      </div>
    </header>
  <main class="container my-5">
    ${generateCards(cards)}
  </main>
  </body>
  </html>
    `;
};
