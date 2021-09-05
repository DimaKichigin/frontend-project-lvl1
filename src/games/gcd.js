import randomNum from '../utils.js';
import runEngine from '../game-engine.js';

const rule = 'Find the greatest common divisor of given numbers.';
const getGreatestCommonDivisor = (num1, num2) => (num2 === 0 ? num1 : getGreatestCommonDivisor(num2, num1 % num2));

const getGameData = () => {
  const num1 = randomNum(1, 50);
  const num2 = randomNum(1, 50);
  const question = `${num1} ${num2}`;
  const result = getGreatestCommonDivisor(num1, num2);
  return [question, String(result)];
};

const startGcdGame = () => {
  runEngine(rule, getGameData);
};

export default () => startGcdGame();
