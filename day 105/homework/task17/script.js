// 18) გააკეთეთ პროგრამა, სადაც stdin-დან მიღებული input გადაეცემა EventEmitter-ს როგორც data და listener-ში მუშავდება (მაგ. uppercase-ში გადაყვანა ან სიგრძის დათვლა)

const EventEmitter = require('events');

const emitter = new EventEmitter();

process.stdin.setEncoding('utf8');

emitter.on('processText', (text) => {
    console.log('Uppercase:', text.toUpperCase());
    console.log('length:', text.length);
});

console.log('შეიყვანეთ ტექსტი:');

process.stdin.on('data', (input) => {
    const text = input.trim();
    emitter.emit('processText', text);
});