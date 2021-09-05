import getRandomNumber from '../utils.js';
import runEngine from '../game-engine.js';

const rule = 'What number is missing in the progression?';
const createProgression = () => {
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 9);
  const length = 10;
  const progression = [];
  for (let k = 0; k < length; k += 1) {
    progression.push(start + step * k);
  }
  return progression;
};

const createProgressionGame = () => {
  const progression = createProgression();
  const { length } = progression;
  const indexForReplace = getRandomNumber(0, length - 1);
  const result = progression[indexForReplace];
  progression.splice(indexForReplace, 1, '..');
  const question = progression.join(' ');
  return [question, String(result)];
};
export default () => runEngine(rule, createProgressionGame);
