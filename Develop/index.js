const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

// function to write README file

fs.writeToFile("README.md", "utf8", data, (err) => {
  if (err) throw err;
  console.log("Successfully wrote README file.");
});

// function to initialize program
function init() {}

// function call to initialize program
init();
