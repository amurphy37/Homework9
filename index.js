const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMD = require("./utils/generateMarkdown");
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the email address associated with your Github account?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description"
    },
    {
        type: "input", 
        name: "installation",
        message: "Install command:"
    },
    {
        type: "input",
        name: "usage",
        message: "Usage command or instruction:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributors:"

    },
    {
        type: "input",
        name: "testCommands",
        message: "Enter Test Commands"
    }



    //add questions
];                     

// Init functgion will kick off inquirere prompt and will run through our array of questions for the user. Responses will be stored and called upon (response) to then pass into our generateMarkdown file to create the Readme.
function init() {
   inquirer.prompt(questions)
   .then(function(response){
           api.getUser(response.username).then(function(data){
            //    fs.writeFile("githubProfile.pdf", generatePDF(response, data.data), (err)=> {
            //        if (err) {
            //            throw new Error("Error. Could not generate PDF file")
            //        }
            //    })
               fs.writeFile("README.md", generateMD(response, data.data), (err) => {
                   if (err) {
                   throw new Error("Error. Could not generate Readme file")
               }
               console.log("Success!")
            });
       })
   })

}

init();
