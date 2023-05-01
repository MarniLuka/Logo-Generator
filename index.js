const inquirer = require('inquirer');
const fs = require('fs');
const logoShapes = require('./lib/shapes');

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
        console.log(responses);

        const newLogo = logoTemplate(responses);
        
        fs.writeFile('logo.svg', newLogo, (err) =>
        err ? console.log(err) : console.log("Created SVG file."))
    })


const shapeTriangle = logoShapes.shapeTriangle;
const shapeCircle = logoShapes.shapeCircle;
const shapeSquare = logoShapes.shapeSquare;

const logoTemplate = (responses) => {
    if (responses.shape === 'Circle') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> ${shapeCircle(responses.shapeColor)}`
    }
    if (responses.shape === 'Triangle') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> ${shapeTriangle(responses.shapeColor)}`
    }
    if (responses.shape === 'Square') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"> ${shapeSquare(responses.shapeColor)}`
    }
}