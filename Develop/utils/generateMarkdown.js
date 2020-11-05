// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Github license](https://img.shields.io/badge/license-${data.license}-green.svg)

  ${data.fullName}'s ${data.title} Project
  
  ## Table of Contents
  
  - [Description](#description)
  
  - [Installation](#installation)
  
  - [Usage](#usage)
  
  - [License](#license)
  
  - [Contributing](#contributing)
  
  - [Tests](#tests)
  
  - [Questions](#questions)
  
  ## Description
  
  ${data.description}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${data.license}
  
  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  ${data.questions}
  
`;
}

module.exports = generateMarkdown;
