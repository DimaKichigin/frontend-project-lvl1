#!/usr/bin/env node
// const nameOfGame = ('Welcome to the Brain Games!');
// import userName from '../src/game-engine.js';
// showMessage('Welcome to the Brain Games!');
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!`);
