// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('generateMarkdown.js');
const { error } = require('console');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?',

    },

    {
        type: 'input',
        name: 'motivation',
        message: 'What is your motivation for this project?',

    },

    {
        type: 'input',
        name: 'purpose',
        message: 'What problem does this project solve?',

    },

    {
        type: 'input',
        name: 'installation',
        message: 'What is need to install/use this project?',

    }



];

// TODO: Create a function to write README file
.then((answers) => {
    const readmeContent = generateMarkdown(answers);
    fs.writeFile('README.md', readmeContent)
    console.log('Successfully created README!')
});

// function init() { }

// Function call to initialize app
init();