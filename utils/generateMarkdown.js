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
module.exports = function generateMarkdown(response,data) {
  // console.log(response);
  // console.log(data);

  // Creating format for markdown file. File will incldue username, table of contents, descripion, installation method, usage method, license, contributors, test methods, test commands
  return `

  Project Title:
  ${response.title}

  #Table of Contents:
  [Title](#Project-Title)

  [Description](#Description)

  [Installation](#Installation)

  [Usage](#Usage)

  [License](#License)

  [Contributing](#Contributing)

  [Test Commands](#Test-Commands)

  [Github Badges](#Github-Badges)

  [Questions](#Questions)

  #Description:
  ${response.description}
  #Installation:
  ${response.installation}
  #Usage:
  ${response.usage}
  #LicenseBadge:
  ${renderLicenseBadge(response.license, response.github, response.title)}
  #License:
   ${renderLicenseSection(data.license)}
  #Contributing:
   ${response.contributing}
  #Test Commands:
   ${response.testCommands}
  #Questions:
  ${response.email}

  ![Avatar Image]
  (${data.avatar_url})
  `;
}
