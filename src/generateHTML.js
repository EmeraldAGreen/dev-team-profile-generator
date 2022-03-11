const fs = require('fs');

function prepareHTML(employeeArray){
    generateHTML()
    for (let index = 0; index < employeeArray.length; index++) {
        if (employeeArray.length>0) {
            appendEmployee(employeeArray[index]);
        } else {

        closeHTML()
    }
}}
// for loop to loop through each employee in the array 
// use appendHTML for each employee in the for loop
// once all employees appended close HTMl 

function generateHTML() {
    let html =
        `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="Description" content="Enter your description here" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">

  <title>Team Profiles</title>
</head>

<body>

  <div class="min-vh-100 p-5 bg-dark text-black">
     <div class="container-fluid">
        
        <h1 class="text-white text-center">Welcome to the Team!</h1>

            <div class="d-flex justify-content-around pt-2">`

    fs.writeFile('./dist/output.html', html, (err) =>
        err ? console.error(err) : console.log('Your team profile is ready in ./dist/output.html')
    )
}

function appendEmployee(employee) {
    return new Promise(function(resolve, reject) {
        const name = employee.getName();
        const role = employee.getRole();
        const id = employee.getId();
        const email = employee.getEmail();
        let data = '';
        if (role === 'Manager') {
            const officeNumber = employee.getOfficeNumber()
            data = 
            `<div class="card mb-2 " style="max-width: 25rem">
                <div class="card-body text-white bg-primary ">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle">${role}</h6>
                </div>

                <div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Member ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number: ${officeNumber}</li>
                </ul>
                </div>
            </div>`
        } else if (role === 'Engineer') {
            const GitHub = employee.getGithub()
            data =
            `<div class="card mb-2" style="max-width: 25rem">
                <div class="card-body text-white bg-primary ">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle">${role}</h6>
                </div>

                <div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Member ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Github: <a target="_blank" href="https://github.com/${GitHub}">${GitHub}</a></li>
                </ul>
                </div>
            </div>`
        } else {
            const school = employee.getSchool()
            data =
            `<div class="card mb-2" style="max-width: 25rem">
                <div class="card-body text-white bg-primary ">
                <h5 class="card-title">${name}</h5>
                <h6 class="card-subtitle">${role}</h6>
                </div>

                <div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Member ID: ${id}</li>
                <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>`}
        fs.appendFile('./dist/output.html', data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}

function closeHTML() {
    const html = 
    `</div>
    </div>    
    </body>
    </html>`;

    fs.appendFile("./dist/output.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
}


module.exports = prepareHTML