// Задание 8 (5.7-8)

// Создайте произвольный массив Map. Получите его ключи и выведите 
// в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let charMap = new Map();
let classStyleBowman = { style: "Archery", focus: "Longbow"};
let classStyleDualWield = {  style: "Dual wield", focus: "Longsword"};
charMap.set("Race", "Elf");
charMap.set("Class", "Ranger"); 
charMap.set("Level", 4);
charMap.set("Specialization", true);
charMap.set("Fighting style", classStyleBowman.style);
charMap.set("Weapon focus", classStyleBowman.focus);

for (let [key, value] of charMap) {
    console.log(`Key — ${key}, value — ${value}`);
}

// Optimized view for pre-determined character sheet:

// let classStyleBowman = { style: "Archery", focus: "Longbow"};
// let classStyleDualWield = {  style: "Dual wield", focus: "Longsword"};

// let charMap = new Map([
//     ["Race", "Elf"],
//     ["Class", "Ranger"],
//     ["Level", 4],
//     ["Specialization", true],
//     ["Fighting style", classStyleBowman.style],
//     ["Weapon focus", classStyleBowman.focus],
// ]);

// for (let [key, value] of charMap) {
//     console.log(`Key — ${key}, value — ${value}`);
// }