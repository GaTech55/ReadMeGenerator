// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![Github license](https://img.shields.io/badge/license-${data.license}-green.svg)

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
  
  This application is covered under the ${data.installation} license. 
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${data.license}
  
  ## Contributing
  
  ${data.contributing}

  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  _If you have additional questions regarding this project please direct them to one of the following options:_
  * My GitHub profile: [${data.github}](https://github.com/${data.github}/)
  * My email address: [${data.email}](mailto:${data.email})
  
  ---
  Copyright (c) 2020 ${data.github}.
`;
}

module.exports = generateMarkdown;
