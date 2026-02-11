// 4) გააკეთეთ 3-3 მაგალითი თითოეულ მეთოდზე და ახსენით თქვენი სიტყვებით  თუ რას აკეთებს ეს მეთოდები (indexOf, lastIndexOf, includes)

let fruits = ["apple", "banana", "orange"];

console.log(fruits.indexOf("banana")); // 1
console.log(fruits.indexOf("apple")); // 1
console.log(fruits.indexOf("kiwi")); // -1


let numbers = [10, 20, 30, 20, 40];

console.log(numbers.lastIndexOf(20)); // 3
console.log(numbers.lastIndexOf(40)); // 4
console.log(numbers.lastIndexOf(50)); // -1


let animals = ["cat", "dog", "lion"];

console.log(animals.includes("dog")); // true
console.log(animals.includes("tiger")); // false
console.log(animals.includes("cat")); //true