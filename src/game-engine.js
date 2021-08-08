/* import readlineSync from 'readline-sync';

const attemptsCount = 3;

const runGame = (description, generateGameConditions) => {
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < attemptsCount; i += 1) {
    const [question, correctAnswer] = generateGameConditions();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame; */

import readlineSync from 'readline-sync';

const showMessage = (message) => console.log(message);

const roundsCount = 3;

export default (rule, getGameData) => {
  showMessage('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  showMessage(`Hello, ${userName}!`);
  showMessage(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [task, solution] = getGameData();
    //  console.log([task, solution]); // проверка
    showMessage(`Question: ${task}`);
    const answerOfUser = readlineSync.question('Answer: ');
    if (answerOfUser === solution) {
      showMessage('Correct!');
    } else {
      showMessage(`Sorry, '${answerOfUser}' is wrong answer, correct answer was '${solution}'.`);
      showMessage(`Lets try again, ${userName}!`);
      return;
    }
  }
  showMessage(`Congratulations, ${userName}!`);
};
