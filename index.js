// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import Choices from 'inquirer/lib/objects/choices';
import { type } from 'os';
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        message:'What is the title of your project?',
        name:'projectTitle',
    },
//Start the Description Questions
    {
        message:'What was your motivation for this project?',
        name:'descriptionMotivation',
    },
    {
        message:'What problem does your project solve if any?',
        name:'descriptionProblem',
    },
    {
        message:'What did you learn from this project?',
        name:'descriptionLearned',
    },
//End the Description Questions
    {
        message:'What section would you like in your Table of Contents?',
        name:'tableOfContents',
        type: 'checkbox',
        choices: ['Installation', 'Usage', 'License', 'Contribution', 'Tests', 'Questions'],
    },
    {
        message:'What are the steps required to install your project?',
        name:'installation',
    },
//Start of the Usage section
    {
        message:'What the instructions to use your application?',
        name:'usageInstructions',
    },
    {
        message:'Do you have an image you wish to attach?',
        name:'usageImgConfirm',
        type: 'confirm',
    },
    {
        message:'What is a short discription of your image?',
        name:'usageImgDiscription',
        when: (answers) => {
            if (answers.usageImgConfirm) {
                return true; //this will show the question if usageImgConfirm is true
            }
            return false; //this will hide the question
        }
    },
    {
        message:'What is the file path for your image?',
        name:'usageImgPath',
        when: (answers) => {
            if (answers.usageImgDiscription) {
                return true; //this will show the question if usageImgDiscription is true
            }
            return false; //this will hide the question
        }
    },
//End of the Usage section
    {
        message:'What, if any, license are you useing?',
        name:'license',
        type:'list',
        choices: ['AFL-3.0', 'BSL-1.0', 'CC', 'ECL-2.0', 'ISC', 'MIT', 'Unlicense', 'WTFPL', 'NONE'],
    },
    {
        message:'How can others contribute?',
        name:'contribution',
    },
    {
        message:'Please provide any test you have for your application and how to run them.',
        name:'tests',
    },
    {
        message:'What is your username?',
        name:'gitHub',
    },
    {
        message:'What is your email address?',
        name:'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
