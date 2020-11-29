"use strict";

//Объявляем переменную и присвоим ей значение рандомного числа от 1 до 100 с округлением до ближайнего меньшего
let number = Math.floor(Math.random() * (100 - 1) + 1);

//Запишем функцию на проверку на число в переменную
let isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

function gameBot(attempts, number) {
  console.log(number); //Выведем сразу его в консоль, чтобы не искать бесконечно

  let enterNum = prompt("Угадай число от 1 до 10");
  if (enterNum === null) {
    alert("Игра окончена");
    return enterNum;
  }
  if (attempts === 0) {
    if (confirm("Попытки закончились! Хотите сыграть еще?")) {
      number = Math.floor(Math.random() * (100 - 1) + 1);
      return gameBot(9, number);
    }
    alert("Игра окончена");
    return null;
  }
  if (isNumber(enterNum)) {
    enterNum = +enterNum;
    if (enterNum > number) {
      alert("Загаданное число меньше, осталось попыток: " + attempts);
    } else if (enterNum < number) {
      alert("Загаданное число больше, осталось попыток: " + attempts);
    }
    if (enterNum === number) {
      if (confirm("Поздравляю, Вы угадали!!! Хотите сыграть еще?")) {
        number = Math.floor(Math.random() * (100 - 1) + 1);
        return gameBot(9, number);
      }
      alert("Игра окончена");
      return null;
    }
  } else {
    alert("Введи число!");
  }
  return gameBot(--attempts, number);
}

gameBot(9, number);
