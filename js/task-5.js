'use strict';

const checkForSpam = function (message) {
  const messageToLower = message.toLowerCase();
  return messageToLower.includes('spam') || messageToLower.includes('sale');
};

/* Проверка скрипта*/
console.log(checkForSpam('Latest technology news'));
console.log(checkForSpam('JavaScript weekly newsletter'));
console.log(checkForSpam('Get best sale offers now!'));
console.log(checkForSpam('[SPAM] How to earn fast money?'));
