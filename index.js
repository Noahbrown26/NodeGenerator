const inquirer = require("inquirer");
const fs = require("fs");


const generateHTML = (username, location, age, github) => {
    return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="index.css" type="text/css" rel="stylesheet">
      <title>Generated Portfolio</title>
    </head>
    <body>
      <h1 class="center">My Name Is ${username}</h1>
      <p class="center">I live in ${location}</p>
      <p class="center">I am ${age} Years Old</p>
      <p class="center">GitHub Account: <a href="https://github.com/${github}">${github}</a></p>
    </body>
  </html>
  `;
  };
  
  inquirer
  .prompt([
    { name: "username", message: "What is your name?", type: "input" },
    { name: "location", message: "Where do you live?", type: "input" },
    { name: "age", message: "How old are you?", type: "input" },
    { name: "github", message: "What is your GitHub name?", type: "input" },
  ])
  .then((response) => {
    const text = generateHTML(
      response.username,
      response.location,
      response.age,
      response.github,
    );
    console.log(response);
    fs.writeFile("index.html", text, (err) => {
      err ? console.log(err) : console.log("Success");
    });
  });