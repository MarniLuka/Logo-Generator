const inquirer = requrie('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter up to 3 characters for your logo',
            name: 'text',
        },
        {
            type: 'input',
            message: 'What color would you like the logo to be?',
            name: 'color',
        },
        {   
            type: 'list',
            message: 'Please select a shape:',
            name: 'shape',
            choices: [
                'circle',
                'triangle',
                'square',
            ],
        },
    ])
    .then