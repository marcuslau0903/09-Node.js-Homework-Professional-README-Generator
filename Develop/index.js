// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create a function to initialize app
// const init = () => {};
const init = async () => {

  const questions = [ 
    {
      name: "projectTitle",  
      type:"input",
      message: "what is the project title?"},
      {
      name: "license",
      type:"list",
      message:"what is the license of your repository?",
      choices: ["MIT", "APACHE_2.0","BSD_3","GPL_3.0", "None"]
      },
     {
      name: "description",
      type:"input",
      message: "Provide a short description explaining the what, why, and how of your project."
     },
     {
       name: "installationProcess",
       type: "input",
       message:"whats the installation process?",
     },
     {
      name: "usage",
      type: "input",
      message:"how do you use this app?",
    },
    {
      name: "contributionGuidelines",
      type: "input",
      message:"who was involved/contributed in this project",
    },
    {
      name: "test",
      type: "confirm",
      message:"have you used any tests for this app?",
    },
    {
      name: "testDetails",
      type: "input",
      message:"what are the test process?",
      when:(answers) => answers.test
    },
    {
      name: "gitHubProfile",
      type: "input",
      message:"what is your gitHub Profile?",
    },
    {
      name: "contactEmail",
      type: "input",
      message:"what is your email address?",
    }
  ]
  const answers = await getAnswersFromQuestions(questions)
  // console.log(answers)
  const readMeFile = generateMarkdown(answers)
  writeToFile("GeneratedREADME.md",readMeFile)
}
const getAnswersFromQuestions = async (questions) => {
  const answers = await inquirer.prompt(questions)
  return answers
  }

init()

//  TODO: Create a function to write README file
const writeToFile = async (fileName, data) => fs.writeFileSync(fileName,await data)
    




