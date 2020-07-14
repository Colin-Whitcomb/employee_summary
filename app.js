
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

// const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const employees = [];
console.log(employees);
inquirer.prompt(
    [{
        // Prompt
        type: "list",
        name: "Prompt",
        message: "Would you like to build an engineering team?",
        choices: [
            "Yes",
            "No",
        ]
    },
// !! create a function that will stop program if user chooses "No"
    {
        // Name
        type: "input",
        message: "What's their name?",
        name: "name"
    },
    {
        // ID
        type: "input",
        message: "What's their ID?",
        name: "id"
    },
    {
        // Email
        type: "input",
        message: "What's their email?",
        name: "email"
    },
    {
        // Role
        type: "list",
        message: "What is their role?",
        name: "role",
        choices: [
          "Manager",
          "Engineer",
          "Intern"
        ]
      },
// !! create a function that will ask specific questions determined on which role thay choose

// --- Manager --- //
      {
        // Office Number
        type: "input",
        message: "What is their office number?",
        name: "office_number"
    },

// --- Engineer --- //
    {
        // GitHub Username
        type: "input",
        message: "What is their GitHub username?",
        name: "github"
    },    

// --- Intern --- //
    {
        // School
        type: "School",
        message: "What school do you attend?",
        name: "school"
    },    

// --- Add another teammate? --- //
{
     // Add Another?
     type: "list",
     name: "Add",
     message: "Would you like to build an engineering team?",
     choices: [
         "Yes",
         "No",
     ]
}, 


    ]).then(function (data) {
        employees.push(data);
      



    })




// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
