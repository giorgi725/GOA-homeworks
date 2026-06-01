// 2) ახსენით რა არის Errors Node.js-ში, რა ტიპის error-ები არსებობს (runtime, system, user-defined) და როგორ ხდება მათი დამუშავება (try/catch, callbacks-ში err, process.on("uncaughtException")). მოიყვანეთ მარტივი მაგალითი

// Node.js-ში Error არის ობიექტი, რომელიც ჩნდება მაშინ, როცა პროგრამაში რაღაც არასწორად მიდის — მაგალითად: ფაილი ვერ მოიძებნა, არასწორი input

// Runtime Errors

// ეს არის შეცდომები, რომლებიც ჩნდება პროგრამის გაშვების დროს. undefined ფუნქციის გამოძახება, არარსებული variable

// System Errors

// ეს შეცდომები მოდის ოპერაციული სისტემიდან ან ფაილური სისტემიდან. ფაილი არ არსებობს, permission denied

// User-defined Errors

// ეს არის error-ები, რომლებსაც დეველოპერი თვითონ ქმნის.

// function divide(a, b) {
//     if (b === 0) {
//         throw new Error('0-ზე გაყოფა არ შეიძლება!');
//     }
//     return a / b;
// }

// console.log(divide(10, 0));


// try/catch (sync errors)

// გამოიყენება synchronous კოდისთვის.

// try {
//     const result = JSON.parse('invalid json');
//     console.log(result);
// } catch (err) {
//     console.log('Error caught:', err.message);
// }

// callbacks-ში err (Node.js style)

// Node.js-ში ხშირია callback pattern:

// const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.log('Error:', err.message);
//         return;
//     }
//     console.log(data);
// });

// process.on("uncaughtException") (global handler)

// ეს იჭერს დაუმუშავებელ შეცდომებს.

// process.on('uncaughtException', (err) => {
//     console.log('Uncaught Error:', err.message);
//     process.exit(1);
// });

// throw new Error('Something went wrong!');