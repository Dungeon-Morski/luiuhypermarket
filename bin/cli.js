#!/usr/bin/env node

import { execSync } from 'child_process';

const runCommand = command => {
    try {
        execSync(`${command}`, { stdio: 'inherit' });
    } catch (error) {
        console.error(`Failed to execute ${command}`, error);
        return false;
    }

    return true;
};

if (process.argv.length < 2) {
    console.log('Run this command with folder name as a parameter.');
    process.exit(-1);
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/k3yw/ts-kernel-structure.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
    process.exit(-1);
}

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) {
    process.exit(-1);
}

console.log(`Repository has been successfully clonned to [${repoName}]!`);
