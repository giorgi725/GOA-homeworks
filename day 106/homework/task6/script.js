// 7) დაწერეთ პროგრამა, რომელიც:
// - წაიკითხავს ფაილს fs.readFile()-ით  
// - დაბეჭდავს მის შიგთავსს  
// - და აჩვენებს, რომ console.log ფაილის გარეთ ჯერ შესრულდება (async behavior)

const fs = require('fs');

console.log('1');

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error:', err.message);
        return;
    }
    console.log('2');
    console.log(data);
});

console.log('3');