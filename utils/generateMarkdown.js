//Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === false) {
    return "";
  } else {
    return "![Badge](https://img.shields.io/badge/license-MIT-blue.svg)";
  }
}

//Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === false) {
    return "";
  } else {
    return `${renderLicenseBadge(license)}`
  }
}

//Creates a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.License === false) {
    return "";
  } else {
    //ask tutor 
    return `# License
   The ${ data.License } License.
      Copyright(c) 2021 ${ data.Credits }.
        
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
  documentation files(the "Software"), to deal in the Software without restriction, including without limitation
  the rights to use, copy, modify, merge, publish, distribute, sublicense, and / or sell copies of the Software, and
  to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all copies or substantial portions
  of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
  THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE 
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
      TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
}

//Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseLink(data.License)}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#Credits)
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

module.exports = { generateMarkdown, renderLicenseSection };
