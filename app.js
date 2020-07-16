const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Employee = require("./lib/Employee");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// array of employees to give to render
const employees = [];
// console.log(employees);

// inquirer prompts
// var restart = function () {
inquirer.prompt(
        [{
                type: "list",
                name: "prompt",
                message: "Would you like to build an engineering team?",
                choices: [
                    "Yes",
                    "No",
                ]
            },
        ])
    .then(data => {
        // console.log(data);
        if (data.prompt === 'Yes') {
            askQuestions()
        } else {}
    });

// ------Roll-------- // 
var askQuestions = function () {
    inquirer.prompt([{

            type: "list",
            message: "What is their role?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }, ])
        .then(data => {
            // console.log("Employee data:");
            // console.log(data);
            if (data.role === 'Manager') {
                askManager();
            } else if (data.role === 'Engineer') {
                askEngineer();
            } else {
                askIntern();
            }
        })
};





// ------Manager-------- // 
var askManager = function () {
    inquirer.prompt([{
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
            // Office Number
            type: "input",
            message: "What is their office number?",
            name: "officeNumber"

        },

    ]).then(data => {
        // console.log(data);
        var manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        // console.log(manager);
        employees.push(manager);
        console.log(employees);
        newTeamMember();
    })
}


// // --- Engineer --- //
var askEngineer = function () {
    inquirer.prompt([{
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
            // GitHub Username
            type: "input",
            message: "What is their GitHub username?",
            name: "github"
        },
    ]).then(data => {
        // console.log(data);
        var engineer = new Engineer(data.name, data.id, data.email, data.github);
        employees.push(engineer);
        console.log(employees);
        newTeamMember();
    })
}

// // --- Intern --- //
var askIntern = function () {
    inquirer.prompt([{
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
            // School
            type: "input",
            message: "What school do you attend?",
            name: "school"
        },
    ]).then(data => {
        var intern = new Intern(data.name, data.id, data.email, data.school);
        employees.push(intern);
        newTeamMember();
    })
}

var newTeamMember = function () {
    inquirer.prompt(
            [{
                    type: "list",
                    name: "prompt",
                    message: "Would you like to add another team member?",
                    choices: [
                        "Yes",
                        "No",
                    ]
                },
            ])
        .then(data => {
            console.log(data);
            if (data.prompt === 'Yes') {
                askQuestions()
            } else {
                buildTeam();
            }
        });
}

var buildTeam = () => {
// fs write and sync rendering of: 
fs.writeFileSync(outputPath, render(employees));

};
