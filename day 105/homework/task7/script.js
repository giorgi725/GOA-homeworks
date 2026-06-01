// 8) გაეცანით Util module-ის ფუნქციებს (format, inspect, callbackify). დაწერეთ მაგალითი, სადაც გამოიყენებთ თითოეულ მათგანს

// Node.js-ის Util Module შეიცავს დამხმარე ფუნქციებს, რომლებიც ამარტივებს მონაცემების ფორმატირებას, ობიექტების დათვალიერებას და Promise-ების Callback ფუნქციებად გადაქცევას.

// მოდულის დასაიმპორტებლად:

// const util = require('util');

// util.format() მუშაობს printf-ის მსგავსად და საშუალებას გვაძლევს ფორმატირებულად შევქმნათ ტექსტი.

// const util = require('util');

// const message = util.format(
//     "Name: %s | Age: %d | Student: %s",
//     "Giorgi",
//     20,
//     true
// );

// console.log(message);

// %s	String
// %d	Number
// %j	JSON
// %o	Object

// util.inspect() გამოიყენება ობიექტების დეტალურად დასათვალიერებლად.

// const util = require('util');

// const student = {
//     name: "Giorgi",
//     age: 20,
//     skills: ["JavaScript", "Node.js"],
//     address: {
//         city: "Tbilisi",
//         country: "Georgia"
//     }
// };

// console.log(util.inspect(student, { depth: null }));


// util.callbackify() Promise-ზე დაფუძნებულ (async) ფუნქციას გარდაქმნის Callback სტილის ფუნქციად.

// const util = require('util');

// async function getUser() {
//     return {
//         id: 1,
//         name: "Giorgi"
//     };
// }

// const getUserCallback = util.callbackify(getUser);

// getUserCallback((err, result) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log(result);
// });

// util.format() — ტექსტის ფორმატირება.
// util.inspect() — ობიექტების დეტალური ჩვენება.
// util.callbackify() — Promise/async ფუნქციის Callback ფუნქციად გარდაქმნა.