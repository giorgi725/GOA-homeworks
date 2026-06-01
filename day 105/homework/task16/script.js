// 17) შექმენით პატარა CLI აპლიკაცია, სადაც:
// - მომხმარებელი წერს ტექსტს  
// - პროგრამა ამოწმებს ტექსტს  
// - სხვადასხვა event იძახება სხვადასხვა input-ზე (მაგ. "exit", "info", "random")

const EventEmitter = require('events');

const emitter = new EventEmitter();

process.stdin.setEncoding('utf8');

emitter.on('info', () => {
    console.log('ეს არის CLI.');
});

emitter.on('random', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`შემთხვევითი რიცხვი: ${randomNumber}`);
});

emitter.on('exit', () => {
    console.log('პროგრამა დასრულდა.');
    process.exit();
});

process.stdin.on('data', (input) => {
    const command = input.trim().toLowerCase();

    if (command === 'info') {
        emitter.emit('info');
    } else if (command === 'random') {
        emitter.emit('random');
    } else if (command === 'exit') {
        emitter.emit('exit');
    } else {
        console.log('უცნობი ბრძანება!');
    }
    console.log('შეიყვანეთ შემდეგი ბრძანება:');
});