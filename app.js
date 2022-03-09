// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Team profiles
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const generateHTML = require("./src/generateHTML")

const employeeArray = [];

// Create a function to initialize app
function init() {
    writeHTML();
    addMember();
};

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
function addMember() {
    return inquirer.prompt([
        {
            message: 'Enter the following information for a team member profile.',
            name: 'start',
        },
        {
            type: 'input',
            message: 'Member name:',
            name: 'name',
        },
        {
            type: 'list',
            message: "Choose this member's role",
            choices: ['Manager', 'Engineer', 'Intern'],
            name: 'role',
        },
        {
            type: 'input',
            message: 'Member ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter the member's email address",
            name: 'email',
        },
    ])

// CHAIN A .THEN THAT ADDS GITHUB/SCHOOL/OR OFFICE # INFO BASED ON ROLE SELECTED IN THE PROMPT
    .then(function(name, id, email){
        let role = ""
        switch(input.role) {
            case 'Manager':
                role = 'office number'
                return role
            case 'Engineer':
                role = 'github'
                return role
            case 'Intern':
                role = 'school name'
                return role
            default:
                `Please select the member's role.`
        }
        inquirer.prompt([{
            message: `Enter the member's ${role}`,
            name: "role"
        },
        {   type:'list',
            message: 'Add another member?',
            choices:['yes', 'no',],
            name: 'anotherMember'
        }])
        .then(function(role, anotherMember) {
            if (input.role === 'Engineer'){
                let newMember;
                newMember = new engineer(name, id, email, role)
            } else if (input.role === 'Intern'){
                newMember = new intern(name, id, email, role)
            } else {
                newMember = new manager(name, id, email, role)
            }
            employeeArray.push(newMember)
            generateHTML(newMember)
            .then(function() {
                if (anotherMember === 'yes') {
                    addMember();
                } else {
                    closeHTML();
                }
            });
            
        });
    });
} 

// Function call to initialize app
init();  


// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I exit the application, and the HTML is generated