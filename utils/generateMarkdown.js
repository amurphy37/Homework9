function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// Development will happen in generate markdown
function generateMarkdown(response,data) {
  // Creating format for markdown file. File will incldue username, table of contents, descripion, installation method, usage method, license, contributors, test methods, test commands
  return `

  #Github Username:
  # ${data.username}

  #Table of Contents:
  [Title](#Project-Title)

  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Contributing](#Contributing)

  [Test Commands](#Test-Commands)

  [Github Badges](#Github-Badges)

  [Qusetions](#Questions)

  // Pulling in data from api call (data) and inquirere prompt responses (response) to populate readme file content

  #Project Title: 
  # ${data.title}
  #Description:
  # ${response.description}
  #Installation:
  # ${response.installation}
  #Usage:
  # ${response.usage}
  #License
  #Contributing:
  # ${response.contributing}
  #Test Commands:
  # ${respones.testCommands}
  #Github Badges:
  # ${data.badges}
  #Questions:
  #${data.email}
  #${data.avatar}
  `;



}

module.exports.generateMarkdown(reponse, data) = generateMarkdown(response, data);
