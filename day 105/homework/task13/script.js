// 14) შექმენით პროგრამა, სადაც ერთ event-ს ექნება რამდენიმე listener (emitter.on მრავალჯერ). აჩვენეთ, რომ ყველა listener იძახება ერთ emit-ზე

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greet', (name) => {
    console.log(`1: ${name}!`);
});

emitter.on('greet', (name) => {
    console.log(`2: ${name}!`);
});

emitter.on('greet', (name) => {
    console.log(`3: ${name}!`);
});

emitter.emit('greet', 'Giorgi');