// 5) გაეცანით Console module-ის სხვადასხვა მეთოდებს (log, error, warn, table, time, timeEnd) და შექმენით მაგალითი, რომელიც აჩვენებს თითოეულ მათგანს პრაქტიკაში

// console.log()	ჩვეულებრივი ინფორმაციის დაბეჭდვა
// console.warn()	გაფრთხილების შეტყობინება
// console.error()	შეცდომის შეტყობინება
// console.table()	მონაცემების ცხრილის სახით ჩვენება
// console.time()	დროის ათვლის დაწყება
// console.timeEnd()	დროის ათვლის დასრულება და შედეგის ჩვენება

console.log("=== Console Module Demo ===");
console.log("Welcome to Node.js!");

console.warn("Warning: Low disk space!");

console.error("Error: Database connection failed!");

const students = [
    {
        id: 1,
        name: "Giorgi",
        age: 20
    },
    {
        id: 2,
        name: "Nika",
    age: 21
    },
    {
    id: 3,
    name: "Ana",
    age: 19
    }
];

console.log("\nStudents Table:");
console.table(students);

console.log("\nCalculating...");

console.time("Loop Time");

let sum = 0;

for (let i = 1; i <= 1000000; i++) {
    sum += i;
}

console.timeEnd("Loop Time");

console.log("Sum =", sum);

console.log("\nProgram Finished.");