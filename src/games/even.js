/* import generateRandomNumber from '../generateRandomNumber.js';
import runGame from '../game-engine.js';

// Определение четности числа
const isEven = (num) => num % 2 === 0;

// Задание
const description = 'Answer "yes" if the number is even. Otherwise answer "no".';

// Формирование пар "Вопрос-ответ"
const generateGameConditions = () => {
  const question = generateRandomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [`${question}`, answer];
};
const exportFunctions = () => {
  runGame(description, generateGameConditions);
};

export default exportFunctions; */

import randomNum from '../generateRandomNumber.js';
import engine from '../game-engine.js';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const question = randomNum(1, 50);
  const result = (isEven(question) ? 'yes' : 'no');
  return [question, String(result)];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  engine(rule, getGameData);
};

export default () => startEvenGame();
