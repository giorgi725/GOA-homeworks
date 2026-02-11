// 3) ყველა ახალ ნასწავლი მეთოდზე გააკეთეთ 2-2 მაგალითი და ახსენით კომენტარებით თქვენი სიტყვებით თუ რას აკეთებს  თითოეული მეთოდი (push,pop,unshift,shift, slice, splice)

// push
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

// pop
let fruits2 = ["apple", "banana", "orange"];
fruits2.pop();
console.log(fruits2);

let numbers2 = [10, 20, 30];
let last = numbers2.pop();
console.log(last);
console.log(numbers2);

// unshift
let fruits3 = ["banana", "orange"];
fruits3.unshift("apple");
console.log(fruits3);

let numbers3 = [2, 3];
numbers3.unshift(0, 1);
console.log(numbers3);

// shift
let fruits4 = ["apple", "banana", "orange"];
fruits4.shift();
console.log(fruits4);

let numbers4 = [100, 200, 300];
let first = numbers4.shift();
console.log(first);
console.log(numbers4);

// slice
let fruits5 = ["apple", "banana", "orange", "kiwi"];
let result = fruits5.slice(1, 3);
console.log(result);
console.log(fruits5);

let numbers5 = [10, 20, 30, 40, 50];
let part = numbers5.slice(2);
console.log(part);

// splice
let fruits6 = ["apple", "banana", "orange", "kiwi"];
fruits6.splice(1, 2);
console.log(fruits6);

let numbers6 = [1, 2, 5];
numbers6.splice(2, 0, 3, 4);
console.log(numbers6);