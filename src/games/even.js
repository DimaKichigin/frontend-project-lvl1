import randomNum from '../utils.js';
import engine from '../game-engine.js';

// Определение четности числа
const isEven = (num) => num % 2 === 0;

// Формирование пар "Вопрос-ответ"
const getGameData = () => {
  const question = randomNum(1, 50);
  const result = (isEven(question) ? 'yes' : 'no');
  return [question, String(result)];
};

// Задание
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEvenGame = () => {
  engine(rule, getGameData);
};

export default () => startEvenGame();
