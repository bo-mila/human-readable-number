const numberNames = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];
const dozenNames = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
];

module.exports = function toReadable (number) {
      if (number < 20) {
           return numberNames[number];
      }
      const i = number < 100 ? 10 : 100;
      return ((i === 100) ? (numberNames[Math.floor(number / i)] + ' hundred') : dozenNames[Math.floor(number / i) - 2]) + ((number % i) ? (' ' + toReadable(number - Math.floor(number / i) * i)) : '');
};
