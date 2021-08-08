// Генерация случайного числа в заданном диопазоне
// eslint-disable-next-line max-len
// const generateRandomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
// export default generateRandomNumber;

export default (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};
