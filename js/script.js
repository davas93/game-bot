"use strict";

//Объявляем переменную и присвоим ей значение рандомного числа от 1 до 100 с округлением до ближайнего меньшего
let number = Math.floor(Math.random() * (100 - 1) + 1);

console.log(number); //Выведем сразу его в консоль, чтобы не искать бесконечно

//Запишем функцию на проверку на число в переменную
let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function gameBot() {
  let enterNum = prompt("Угадай число от 1 до 100");
  if (enterNum === null) {
    alert("Игра окончена");
    return enterNum;
  }
  if (isNumber(enterNum)) {
    enterNum = +enterNum;
    if (enterNum > number) {
      alert("Загаданное число меньше");
    } else if (enterNum < number) {
      alert("Загаданное число больше");
    } else if (enterNum === number) {
      alert("Поздравляю, Вы угадали!!!");
      return enterNum;
    }
  } else {
    alert("Введи число!");
  }
  return gameBot();
}

gameBot();
