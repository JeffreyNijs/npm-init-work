#!/usr/bin/env node

const { execSync } = require('child_process');
const prompts = require('prompts');

(async () => {
    const questions = [
        {
            type: 'confirm',
            name: 'vue',
            message: 'Install Vue?',
            initial: true,
        },
        {
            type: 'confirm',
            name: 'typescript',
            message: 'Install TypeScript?',
            initial: true,
        },
        {
            type: 'confirm',
            name: 'pinia',
            message: 'Install Pinia?',
            initial: true,
        },
        {
            type: 'confirm',
            name: 'tailwindcss',
            message: 'Install Tailwind CSS?',
            initial: true,
        },
        {
            type: 'confirm',
            name: 'vite',
            message: 'Install Vite?',
            initial: true,
        },
        // Add more questions for additional packages here
    ];

    const response = await prompts(questions);

    if (response.vue) {
        execSync('npm install vue');
    }
    if (response.typescript) {
        execSync('npm install typescript');
    }
    if (response.pinia) {
        execSync('npm install pinia');
    }
    if (response.tailwindcss) {
        execSync('npm install tailwindcss');
    }
    if (response.vite) {
        execSync('npm install vite');
    }
    // Add more installation commands for additional packages here

    console.log('Project setup completed!');
})();
