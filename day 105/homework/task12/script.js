// 13) დაწერეთ Node.js პროგრამა, სადაც შექმნით EventEmitter-ს, დაარეგისტრირებთ მინიმუმ 2 განსხვავებულ event-ს და გამოიძახებთ მათ სხვადასხვა მონაცემებით

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome to Node.js.`);
});

myEmitter.on('studentAdded', (name, age) => {
    console.log(`Student Added: ${name}, Age: ${age}`);
});

myEmitter.emit('greet', 'Giorgi');
myEmitter.emit('studentAdded', 'Nika', 112);