const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const utils = require("util");

const writeFileAsync = utils.promisify(fs.writeFile);

// array of questions for user
// const questions = [];
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
  ]);

// function to write README file

// function writeToFile("README.md", "utf8", data, (err) => {
//   if (err) throw err;
//   console.log("Successfully wrote README file.");
// });

// function to initialize program
// function init() {}

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
