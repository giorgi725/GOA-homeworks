// 16) გააკეთეთ პროგრამა, სადაც მომხმარებელი შეიყვანს ტექსტს და თუ ტექსტი უდრის კონკრეტულ სიტყვას (მაგ. "hello"), გამოიძახება შესაბამისი event (მაგ. "greetEvent")

const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('greetEvent', () => {
    console.log('helloooo');
});

process.stdin.setEncoding('utf8');

console.log('enter text:');

process.stdin.on('data', (input) => {
    const text = input.trim();
    if (text === 'hello') {
        emitter.emit('greetEvent');
    } else {
        console.log('greetEvent არ გამოიძახა.');
    }
    process.exit();
});