// Задание 7. (5.6-7)

// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
// Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только 
// числа, но и, например, знаки, null и так далее.

let arrMix = [0, 1, -3, 'awesome', null, NaN, 236, true, '$', 4, false];
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;
let filterCount = 0;

for (let i = 0; i < arrMix.length; i++) {
    if (Number.isNaN(arrMix[i]) == true || typeof(arrMix[i]) != 'number') {
        filterCount++;
    } else if (arrMix[i] === 0) {
        zeroCount++;
    } else if (arrMix[i] % 2 == 0) {
        evenCount++;
    } else if (arrMix[i] % 2 != 0) {
        oddCount++; 
    }
}

console.log(`This array contains ${evenCount} even numbers, not counting ${zeroCount} zero(s).`);
console.log(`This array contains ${oddCount} odd numbers.`);
console.log(`*The count has filtered out ${filterCount} non-numbers from this array.`);