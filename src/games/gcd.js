import randomNum from '../utils.js';
import engine from '../game-engine.js';

const getGreatestCommonDivisor = (num1, num2) => {
  if (num2) {
    return getGreatestCommonDivisor(num2, num1 % num2);
  }
  return Math.abs(num1);
};

const getGameData = () => {
  const num1 = randomNum(1, 50);
  const num2 = randomNum(1, 50);
  const question = `${num1} ${num2}`;
  const result = (getGreatestCommonDivisor(num1, num2));
  return [question, String(result)];
};

const rule = 'Find the greatest common divisor of given numbers.';

const startGcdGame = () => {
  engine(rule, getGameData);
};

export default () => startGcdGame();
