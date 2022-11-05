// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (data.license === false) {
    return "";
  } else {
    return "![Github license](https://img.shields.io/badge/license-MIT-blue.svg)" ;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (data.license === false){
  return "";
 } else {
  return "* [License](#license)" }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (data.license === false){
    return "";
 } else {
  //ask tutor 
  return "# License"
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#Credits)
${renderLicenseLink(data)}
* [Features](#Features)
* [Tests](#tests)
# Installation
These are the steps to install this application ${data.Installation}
# Usage
This is how to use this application ${data.Usage}
# Credits
Credit to: ${data.Credits}
${renderLicenseSection(data)}
# Features
Here are the features to this project: ${data.Features}
# Tests
Here is what is needed to run tests: ${data.tests}
`;
}

module.exports = {generateMarkdown, renderLicenseSection};
