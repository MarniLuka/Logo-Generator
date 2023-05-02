const inquirer = require('inquirer');
const fs = require('fs');

// Questions to generate logo
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters for your logo',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What color would you like your text to be?',
            name: 'textColor',
        },
        {   
            type: 'list',
            message: 'Please select a shape:',
            name: 'shape',
            choices: [
                'Circle',
                'Triangle',
                'Square',
            ],
        },
        {
            type: 'input',
            message: 'What color would you like the shape to be?',
            name: 'shapeColor',
        },
    ])
    .then((responses) => {
        // combines the logo template and the user responses
        const newLogo = logoTemplate(responses);
        
        // creates a new svg file from the user input
        fs.writeFile('logo.svg', newLogo, (err) =>
        err ? console.log(err) : console.log("Created SVG file."))
    })

// The template for the different possible shapes the logo can have
const logoTemplate = (responses) => {
    if (responses.shape === 'Circle') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="300"> 
        <circle cx="115" cy="165" r="110" fill="${responses.shapeColor}" />
        <text x="115" y="200" font-size="100" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
        </svg>`
    }
    if (responses.shape === 'Triangle') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points = "150, 18 244, 182 56, 182" fill="${responses.shapeColor}" /> 
        <text x="145" y="150" font-size="80" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
        </svg>`
    }
    if (responses.shape === 'Square') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="200" height="200" fill="${responses.shapeColor}" />
        <text x="145" y="150" font-size="120" text-anchor="middle" fill="${responses.textColor}">${responses.text}</text>
        </svg>`
    }
}