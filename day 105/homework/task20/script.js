// 21) შექმენით პროექტი, სადაც შემთხვევითი პრინციპით შექმნით რიცხვს 1-10მდე, სანამ მომმხმარებელი ამ რიცხვს არ გამოიცნობს იქამდე შემოატანინეთ მნიშვნელოიბა

const EventEmitter = require('events');

const emitter = new EventEmitter();

process.stdin.setEncoding('utf8');

const secretNumber = Math.floor(Math.random() * 10) + 1;

console.log('გამოიცანი რიცხვი 1-10-მდე:');

emitter.on('win', (guess) => {
    console.log(`სწორია! რიცხვი იყო ${secretNumber}. შენ შეიყვანე ${guess}`);
    process.exit();
});

emitter.on('wrong', (guess) => {
    console.log(`არასწორია: ${guess}. სცადე კიდევ!`);
});

process.stdin.on('data', (input) => {
    const guess = Number(input.trim());

    if (guess === secretNumber) {
        emitter.emit('win', guess);
    } else {
        emitter.emit('wrong', guess);
    }
});