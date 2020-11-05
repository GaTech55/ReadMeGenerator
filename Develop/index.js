const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("util");

// array of questions for user
const questionsPrompt = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is your project title?",
    },
    {
      type: "input",
      name: "description",
      message: "What is your project description?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the instructions for installation?",
      default: "npm i ...",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage information for this project?",
    },
    {
      type: "list",
      name: "license",
      message: "Please select your license:",
      choices: ["No License", "BSD_3", "APACHE_2.0", "MIT", "GPL_3.0"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who contributed to this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the test instructions?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ]);

// function to write README file
const writeFileAsync = utils.promisify(fs.writeFile);

// function to initialize program
const init = async () => {
  try {
    const questions = await questionsPrompt();
    const data = generateMarkdown(questions);
    await writeFileAsync("README.md", data);
    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
};

// function call to initialize program
init();
