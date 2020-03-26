const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
​const team = [];

const questions = [
    {
        type: "list",
        name: "empType",
        message: "What type of employee would you like to add?",
        choice: ['Manager', 'Engineer', 'Intern', 'None']
    }
];

const mgrQestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?"
    },
    {
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?"
    }
];

const engQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email address?"
    },
    {
        type: "input",
        name: "github",
        message: "What is the engineer's github username?"
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the intern's school?"
    }
];

function ask() {
    inquirer.prompt(questions).then(answers => {
        if(answers.empType === "Manager"){
            inquirer.prompt(mgrQestions).then(mgrAnswers => {
                team.push(new Manager(mgrAnswers.name, id, mgrAnswers.email, mgrAnswers.officeNum));
                ask();
            });
        }else if(answers.empType === "Engineer"){
            inquirer.prompt(engQuestions).then(engAswers => {
                team.push(new Engineer(engAswers.name, id, engAswers.email, engAswers.github));
                ask();
            });
        }else if(answers.empType === "Intern"){
            inquirer.prompt(internQuestions).then(internAnswers => {
                team.push(new Intern(internAnswers.name, id, internAnswers.email, internAnswers.school));
                ask();
            });
        }else{
            // const htmlRenderer = new render();
            // const html = htmlRenderer.render(team);
            console.log(team);
        }
    });
}

ask();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
​
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
