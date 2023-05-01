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
            message: 'What color would you like your text to be?',
            name: 'textColor',
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
        {
            type: 'input',
            message: 'What color would you like the shape to be?',
            name: 'shapeColor',
        },
    ])
    .then