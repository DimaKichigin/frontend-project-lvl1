import randomNum from '../utils.js';
import runEngine from '../game-engine.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = randomNum(1, 50);
  const result = isPrime(question) ? 'yes' : 'no';
  return [question, String(result)];
};

const startPrimeGame = () => {
  runEngine(rule, getGameData);
};

export default () => startPrimeGame();
