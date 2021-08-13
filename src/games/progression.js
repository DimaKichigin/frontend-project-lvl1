import randomNum from '../utils.js';
import engine from '../game-engine.js';

const getGameData = () => {
  const startOfProgression = randomNum(1, 50);
  const stepOfProgression = randomNum(1, 9);
  const lengthOfProgression = 10;
  const progression = [];
  for (let k = 0; k < lengthOfProgression; k += 1) {
    progression.push(startOfProgression + stepOfProgression * k);
  }
  const lastProgressionIndex = lengthOfProgression - 1;
  const index = randomNum(0, lastProgressionIndex);
  const result = progression[index];
  progression.splice(index, 1, '..');
  const question = progression.join(' ');
  return [question, String(result)];
};

const rule = 'What number is missing in the progression?';

const startProgressionGame = () => {
  engine(rule, getGameData);
};

export default () => startProgressionGame();
