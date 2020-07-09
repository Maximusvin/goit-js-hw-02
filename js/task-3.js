'use strict';

const findLongestWord = function (string) {
  let countLetterOfWord = 0;
  let longestWord = '';

  for (const word of string.split(' ')) {
    if (word.length > countLetterOfWord) {
      countLetterOfWord = word.length;
      longestWord = word;
    }
  }
  return longestWord;
};

/* Проверка скрипта*/
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));
