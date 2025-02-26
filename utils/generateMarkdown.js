//import answers.license from '../index.js'

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string


function renderLicenseBadge(data) {
  if (data.license === 'Apache 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  if (data.license === 'BSD 2-Clause') {
    return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if (data.license === 'BSD 3-Clause') {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
  }
  if (data.license === 'CC 4.0') {
    return `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`
  }
  if (data.license === 'GPL v3') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  }
  if (data.license === 'IBM') {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`
  }
  if (data.license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  if (data.license === 'NONE') {
    return ``
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0') {
    return `[Apache 2.0](https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'BSD 2-Clause') {
    return `[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)`
  }
  if (license === "BSD 3-Clause") {
    return "[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)"
  }
  if (license === "CC 4.0") {
    return "[CC 4.0](https://creativecommons.org/licenses/by/4.0/)"
  }
  if (license === "GPL v3") {
    return "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license === "IBM") {
    return "[IBM](https://opensource.org/licenses/IPL-1.0)"
  }
  if (license === "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)"
  }
  if (license === "NONE") {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);
  if (license !== "NONE") {
    return `## License

  ${renderLicenseLink(license)}`
  }
  else {
    return ``
  }
}
//<----------NOT WORKING---------->
function renderUsageImg(data) {
  console.log(data.usageImgConfirm);
  if (data.usageImgConfirm === true) {
    return `![${data.usageImgDescription}](${data.usageImgPath})`
  }
  else {
    return ``
  }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
 
${renderLicenseBadge(data)}

## Description

### Motivation
${data.descriptionMotivation}

### Problem to Solve
${data.descriptionProblem}

### What I Learned
${data.descriptionLearned}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage

${data.usageInstructions}

${renderUsageImg(data)}

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

If you have an questions feel free to contact ${data.fullName} on [GitHub](https://github.com/${data.gitHub}).
You can also reach ${data.fullName} via [email](mailto:${data.email}).
`;
}

export default generateMarkdown;
