import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (rule, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < roundsCount; i += 1) {
    const [task, solution] = getGameData();
    console.log(`Question: ${task}`);
    const answerOfUser = readlineSync.question('Answer: ');
    if (answerOfUser === solution) {
      console.log('Correct!');
    } else {
      console.log(`Sorry, '${answerOfUser}' is wrong answer, correct answer was '${solution}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default runEngine;
