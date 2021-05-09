// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  // switch case else if
  switch (license) { 
    case "MIT": 
      return "![mit license](https://img.shields.io/badge/license-MIT-green)"
    case "APACHE_2.0":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    case "BSD_3":
      return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    case "GPL_3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    default:
      return
  }
//   if (license === "MIT") {
// return "![mit license](https://img.shields.io/badge/license-MIT-green)"
//   } else if (license === "APACHE_2.0") {
// return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
//   } else if (license === "BSD_3") {
// return "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
//   } else if (license === "GPL_3.0") { 
// return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
//   } else 
//   return 
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (answers) => {
  return `# ${answers.projectTitle}

  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Contact info](#questions)
  
  ## Installation
    ${answers.installationProcess}

  ## Usage
    ${answers.usage}
  
  ## License
  ${renderLicenseBadge(answers.license)}
  
  ## Contributing
  ${answers.contributionGuidelines}
  
  ## Tests
  ${answers.test ? answers.testDetails : "There are no tests for this app"}

  ## Developer contact information: 
  - View my GitHub profile [GitHub](${answers.gitHubProfile})  
  - Email me at [Github](${answers.contactEmail})
`
};

module.exports = generateMarkdown;
