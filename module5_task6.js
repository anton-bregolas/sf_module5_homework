// Задание 6. (5.6-6)

// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. 
// Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arrTest = [1, 1, "awesome", true, 1];
let notTheSameCheck = true;

for (let i = 1; i < arrTest.length; i++) {
    if (arrTest[0] !== arrTest[i]) {
        notTheSameCheck = false;
        break;
    }
}

console.log(notTheSameCheck);