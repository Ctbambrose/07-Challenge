// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is your full name?',
        name: 'fullName'
    },
    {
        message: 'What is your github username?',
        name: 'gitHub',
    },
    {
        message: 'What is your email address?',
        name: 'email',
    },
    {
        message: 'What is the title of your project?',
        name: 'projectTitle',
    },
    // Start the Description Questions
    {
        message: 'What was your motivation for this project?',
        name: 'descriptionMotivation',
    },
    {
        message: 'What problem does your project solve if any?',
        name: 'descriptionProblem',
    },
    {
        message: 'What did you learn from this project?',
        name: 'descriptionLearned',
    },
    // End the Description Questions
    // {
    //     message: 'What section would you like in your Table of Contents?',
    //     name: 'tableOfContents',
    //     type: 'checkbox',
    //     choices: ['Installation', 'Usage', 'License', 'Contribution', 'Tests', 'Questions'],
    // },
    {
        message: 'What are the steps required to install your project?',
        name: 'installation',
    },
    // Start of the Usage section
    {
        message: 'What are the instructions to use your application?',
        name: 'usageInstructions',
    },
    {
        message: 'Do you have an image you wish to attach?',
        name: 'usageImgConfirm',
        type: 'confirm',
    },
    {
        message: 'What is a short description of your image?',
        name: 'usageImgDescription',
        when: (answers) => answers.usageImgConfirm,
    },
    {
        message: 'What is the file path for your image?',
        name: 'usageImgPath',
        when: (answers) => answers.usageImgDescription,
    },
    // End of the Usage section
    {
        message: 'What, if any, license are you using?',
        name: 'license',
        type: 'list',
        choices: ['Apache 2.0', 'BSD 2-Clause', 'BSD 3-Clause', 'CC 4.0', 'GPL v3', 'IBM', 'MIT', 'NONE'],
    },
    {
        message: 'How can others contribute?',
        name: 'contribution',
    },
    {
        message: 'Please provide any tests you have for your application and how to run them.',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log('Error has occurred while writing file:', err);
        } else {
            console.log('Data was successfully written to file!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const fileName = `${answers.fullName}.README.md`;
        const data = generateMarkdown(answers); // Pass user input to generateMarkdown
        writeToFile(fileName, data);
    });
}
//export default answers.licence
// Function call to initialize app
init();