// Решение 1B (с дополнительными проверками).

// Функция проверки на случай, если пользователь ничего 
// не ввёл, нажал на отмену (null) или ввёл пробел(ы)

function checkIfNull(inputNumber) {
    if (inputNumber == null || inputNumber.trim() === '') {
    console.log('Input is null or empty.');
    return;
  }  
  else {
    return "nope";
  }
}

let inputNumber = "0,0" //prompt('Введите целое число');

// Если пользователь ввёл "0,0" или "10,0", заменяем "," на ".", иначе проверка на целое число будет провалена. 

let inputNumberRussianCommaFixed = inputNumber.replace(/[,.]/g, m => (m === ',' ? '.' : ','));

let result = +inputNumberRussianCommaFixed;

if ((checkIfNull(inputNumber)) != "nope") {
  
  alert('Вы ничего не ввели.');
  
  } 

  else if (typeof result === 'number' && result != NaN && (result % 2) == 0) {
    alert('Вы ввели чётное число.');
    console.log(`Number "${result}" is even.`);
    
  } 

  else if (result % 2 == 1 || result % 2 == -1) {
      alert('Вы ввели нечётное число.');
      console.log(`Number "${result}" is odd.`);
  } 

  else {
    
      alert('Ошибка: Вы ввели не целое число!');
      console.log(`Error! "${inputNumber}" is not an integer.`);
  }