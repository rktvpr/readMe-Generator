// Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown")
//Creates an array of questions for user input
const questions = [{
    type: "input",
    name: "Title",
    message: "What would you like your title to be?",
},
{
    type: "input",
    name: "Description",
    message: "What is your description?",
},
{
    type: "input",
    name: "Table of Contents",
    message: "What is in your Table of contents?",
},
{
    type: "input",
    name: "Installation",
    message: "What are the steps required to install your project?",
},
{
    type: "input",
    name: "Usage",
    message: "How is your project used?",
},
{
    type: "input",
    name: "Credits",
    message: "Who helped create this project?",
},
{
    type: "confirm",
    name: "License",
    message: "Does your project need a license?",
},
{
    type: "input",
    name: "Features",
    message: "What features are apart of your project?",
},
{
    type: "input",
    name: "tests",
    message: "What is needed to run tests?",
},
];

//ask tutor
// Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(`./dist/${fileName}`, data)
}

//Creates a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
