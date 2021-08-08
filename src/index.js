/* import readlineSync from 'readline-sync';
import userName from './cli.js';

const attemptsCount = 3;

const runGame = (description, generateGameConditions) => {
  console.log(`${description}\n`);
  for (let i = 0; i < attemptsCount; i += 1) {
    const [question, correctAnswer] = generateGameConditions;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct');
    } else {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame; */
