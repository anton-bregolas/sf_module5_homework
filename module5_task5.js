// Задание 5. (5.5-5)

// Дан произвольный массив. Необходимо вывести количество элементов массива, 
// затем перебрать его и вывести в консоль каждый элемент массива.

let arrTest = [1, "awesome", true];

console.log("There are " + arrTest.length + " items in this array.");

arrTest.forEach(element => {
    console.log(element);
});