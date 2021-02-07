'use strict';

const gameBot = function () {
  const targetNumber = 43;
  const number = function () {

    let isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    const enterNumber = prompt('Угадайте число от 1 до 100?');
      if (enterNumber === null) {
      alert('Игра окончена!'); 
    } else if (!isNumber(enterNumber)) {
      alert('Введите число!');
      number();
    } else if (Number(enterNumber) > targetNumber) {
      alert('Загаданное число меньше!');
      number();
    } else if (Number(enterNumber) < targetNumber) {
      alert('Загаданное число больше!');
      number();
    } else if (Number(enterNumber) === targetNumber) {
      alert('Поздравляю, вы победили!');
    } 
  };
  number();
};
gameBot();



