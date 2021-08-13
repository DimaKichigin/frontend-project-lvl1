// Генерация случайного числа в заданном диопазоне
export default (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};
