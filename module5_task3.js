// Задание 3. (5.4-3)

// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let inputString = 'Hello';
let invertedString = '';

for (i = inputString.length - 1; i >= 0; i--) {
  
  invertedString += inputString[i];
  
}

console.log(inputString + ' becomes ' + invertedString + '!');


let inputString2 = 'World';
let invertedString2 = inputString2.split('').reverse().join('');

console.log(inputString2 + ' becomes ' + invertedString2 + '!');


let inputString3 = 'Yikes!';
function reverseString(str) {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(inputString3 + ' becomes ' + reverseString(inputString3) + '!');


let inputString1 = prompt('Reverse this:');
let invertedString1 = '';

for (i = inputString1.length - 1; i >= 0; i--) {
  
  invertedString1 += inputString1[i];
  
}

console.log(inputString1 + ' becomes ' + invertedString1 + '!');
alert(inputString1 + ' becomes ' + invertedString1 + '!');