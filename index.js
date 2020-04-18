const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description"
    },
    // FIND OUT HOW TO DO TABLE OF CONTENTS
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



    //add questions
];                          

function writeToFile(fileName, data) {

    //setup writefile
    fs.writeFile("README.md", data, err => {
        throw new Error("Error. Could not generate file")
    })
}

// Init functgion will kick off inquirere prompt and will run through our array of questions for the user. Responses will be stored and called upon (response) to then pass into our generateMarkdown file to create the Readme.
function init() {
   inquirer.prompt(questions)
   .then(function(response){
       api.getUser(response.username).then(function(data){
           writeToFile(generateMarkdown(response, data));
       })
   })

}

init();
