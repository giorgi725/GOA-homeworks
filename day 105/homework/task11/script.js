// 12) ახსენით EventEmitter რა არის და როგორ მუშაობს. აღწერეთ პროცესები: event-ის დარეგისტრირება (on) და event-ის გამოძახება (emit). გააკეთეთ პატარა სქემა (register → trigger → execute)

// EventEmitter არის Node.js-ის ჩაშენებული კლასი, რომელიც გამოიყენება Events (მოვლენების) შექმნისა და მართვისთვის.

// ის გვაძლევს საშუალებას:

// დავარეგისტრიროთ Event Listener-ები (on())
// გამოვიძახოთ Events (emit())
// შევასრულოთ კონკრეტული კოდი მაშინ, როდესაც გარკვეული მოვლენა მოხდება

// EventEmitter მდებარეობს Node.js-ის events მოდულში.

// EventEmitter-ის იმპორტი
// const EventEmitter = require('events');
// Event-ის დარეგისტრირება — on()

// on() მეთოდი გამოიყენება Event Listener-ის დასარეგისტრირებლად.

// სინტაქსი:

// emitter.on('eventName', callbackFunction);

// Event-ის გამოძახება — emit()

// emit() მეთოდი იწვევს კონკრეტულ Event-ს.

// სინტაქსი:

// emitter.emit('eventName');

// Event მონაცემებით

// Event-ს შეიძლება მონაცემებიც გადავცეთ.

// const EventEmitter = require('events');

// const myEmitter = new EventEmitter();

// myEmitter.on('welcome', (name) => {
//     console.log(`Welcome ${name}`);
// });

// myEmitter.emit('welcome', 'Giorgi');

// 1. Register (on)

// ვწერთ Listener-ს, რომელიც ელოდება კონკრეტულ Event-ს.

// myEmitter.on('login', callback);
// 2. Trigger (emit)

// ვიძახებთ Event-ს.

// myEmitter.emit('login');
// 3. Execute

// Node.js ავტომატურად ასრულებს Callback ფუნქციას.

// callback();