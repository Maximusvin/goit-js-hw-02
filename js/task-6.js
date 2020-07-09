'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число: ');

  if (Number.isNaN(+input)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  }

  numbers.push(+input); // здесь при Cancel в массив записывается 0.
} while (input !== null);

for (const number of numbers) {
  total += number;
}

console.log(`Общая сумма чисел равна ${total}`);

/* Изначально написал код, который ниже: */

// while (input !== null) {
//   input = prompt('Введите число: ');
//   if (input === null) {
//     break;
//   }

//   const inputIsANumber = Number.isNaN(+input);

//   if (inputIsANumber) {
//     alert('Было введено не число, попробуйте еще раз');
//     continue;
//   }

//   numbers.push(+input);
// }

// for (const number of numbers) {
//   total += number;
// }

// if (numbers.length > 0) {
//   console.log(`Общая сумма чисел равна ${total}`);
// } else {
//   console.log('Вы ни разу не ввели число. Программа закончена');
// }
