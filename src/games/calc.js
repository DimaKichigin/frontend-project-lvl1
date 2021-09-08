/* eslint-disable no-undef */
import randomNum from '../utils.js';
import runEngine from '../game-engine.js';

const rule = 'What is the result of the expression?';
const calculate = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unknown operator');
  }
};
const getGameData = () => {
  const signs = ['+', '-', '*'];
  const indexOfLastSign = signs.length - 1;
  const num1 = randomNum(1, 50);
  const num2 = randomNum(1, 50);
  const sign = signs[(randomNum(0, indexOfLastSign))];
  const question = `${num1} ${sign} ${num2}`;
  const result = calculate(num1, num2, sign);
  return [question, String(result)];
};

const startCalcGame = () => {
  runEngine(rule, getGameData);
};

export default () => startCalcGame();
