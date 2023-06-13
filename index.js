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
        {
            type: 'multiselect',
            name: 'optionals',
            message: 'Select optional packages to install:',
            choices: [
                { title: 'i18n', value: 'i18n' },
                { title: 'ESLint', value: 'eslint' },
                { title: 'histoire', value: 'histoire' },
                { title: 'Day.js', value: 'dayjs' },
                { title: 'libphonenumber-js', value: 'libphonenumber' },
                { title: 'PrimeVue', value: 'primevue' },
            ],
        },
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

    const selectedOptionals = response.optionals || [];
    selectedOptionals.forEach((optional) => {
        switch (optional) {
            case 'i18n':
                execSync('npm install i18n');
                break;
            case 'eslint':
                execSync('npm install eslint');
                break;
            case 'histoire':
                execSync('npm install histoire');
                break;
            case 'dayjs':
                execSync('npm install dayjs');
                break;
            case 'libphonenumber':
                execSync('npm install libphonenumber-js');
                break;
            case 'primevue':
                execSync('npm install primevue');
                break;
            default:
                break;
        }
    });

    console.log('Project setup completed!');
})();
