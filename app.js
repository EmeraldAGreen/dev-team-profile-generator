// Include packages needed for this application
const inquirer = require('inquirer');


// Team profiles
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const generateHTML= require("./src/generateHTML").generateHTML
const closeHTML= require("./src/generateHTML").closeHTML
const employeeArray = [];

// Create a function to initialize app
function init() {
    generateHTML
    addMember();
};

// GIVEN a command-line application that accepts user data
// WHEN I am prompted for my team members and their information
function addMember() {
    return inquirer.prompt([
        {
            message: 'Enter the following information for a team member profile.',
            name: 'start',
        },
        {
            type: 'data',
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
            type: 'data',
            message: 'Member ID:',
            name: 'id',
        },
        {
            type: 'data',
            message: "Enter the member's email address",
            name: 'email',
        },
    ])

// CHAIN A .THEN THAT ADDS GITHUB/SCHOOL/OR OFFICE # INFO BASED ON ROLE SELECTED IN THE PROMPT
    .then(function(name, id, email, role){
        let roleData = ""
    
        if (role === "Manager") {
            roleData = "office number";
        } else if (role === "Engineer") {
            roleData = "github";
        } else {
            roleData = "school name";
        }
        inquirer.prompt([{
            message: `Enter the member's ${roleData}`,
            name: "role"
        },
        {   type:'list',
            message: 'Add another member?',
            choices:['yes', 'no',],
            name: 'anotherMember'
        }])
        
        .then(function(roleData, anotherMember) {
            let newMember;
            if (role === 'Engineer'){
                newMember = new Engineer(name, id, email, roleData)
            } else if (role === 'Intern'){
                newMember = new Intern(name, id, email, roleData)
            } else {
                newMember = new Manager(name, id, email, roleData)
            }
            employeeArray.push(newMember)
            // generateHTML
            // NOW INSTEAD OF THROWING AN ERROR CLICKING YES TAKES YOU OUT OF THE APP INSTEAD OF LOOPING
            if (anotherMember === 'yes') {
                addMember();
                // init(newMember)?
            } else {
                closeHTML
            }
        })
    });
} 

// Function call to initialize app
init();  


// THEN an HTML file is generated that displays a nicely formatted team roster based on user data
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I exit the application, and the HTML is generated