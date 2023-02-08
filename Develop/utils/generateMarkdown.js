// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let str = "";
  return str;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var str = "";
  return str;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  if (data.install_code) {
    data.install_code = `\`\`\`${data.install_code}\`\`\``
  } else {
    data.install_code = ``
  }

  if (data.usage_code) {
    data.usage_code = `\`\`\`${data.usage_code}\`\`\``
  } else {
    data.usage_code = ``
  }

  return `# ${data.title}
  
  ${renderLicenseSection(data.license)}
  
  deployment:${data.deployedUrl}  
  ## Description
  
  ${data.description}
  
  ## Table of Content
  
  [Installation Instructions](#installation-instructions)  
  [Usage Information](#usage-information)  
  [Test Instructions](#test-instructions)  
  [Questions](#questions)  
  
  ## Installation-Instructions
  
  ${data.install}  
  ${data.install_code}
  
  ## Usage-Information
  
  ${data.usage}  
  ${data.usage_code}
  
  ## License
  
  ${data.license}
  
  ## Test-Instructions
  
  ${data.test}
  
  ## Questions
  
  GitHub Username: [@${data.github}](https://github.com/${data.github})  
  
  Reach out to me at [${data.email}](mailto:${data.email}) for questions  
  `;
}

module.exports = generateMarkdown;