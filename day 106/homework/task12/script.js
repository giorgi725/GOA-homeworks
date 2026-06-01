// 13) შექმენით პატარა CLI აპლიკაცია, სადაც:
// - გამოიყენებთ process.stdin-ს მომხმარებლის input-ის მისაღებად  
// - მომხმარებელი შეიყვანს ტექსტს  
// - ეს ტექსტი ჩაიწერება ფაილში fs.appendFile()-ით (მაგ. logs.txt)  
// - ყოველი ახალი input დაემატოს ახალ ხაზზე  
// - თუ მომხმარებელი დაწერს "exit" → პროგრამა დასრულდეს process.exit()-ით  

// (დამატებითი: დაამატეთ error handling err ან try/catch გამოყენებით)


const fs = require('fs');

process.stdin.setEncoding('utf8');

console.log('შეიყვანე ტექსტი (exit → გამოსვლა):');

process.stdin.on('data', (input) => {
    const text = input.trim();

    if (text.toLowerCase() === 'exit') {
        console.log('პროგრამა დასრულდა.');
        process.exit();
    }

    fs.appendFile('logs.txt', text + '\n', (err) => {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log('დამატებულია logs.txt-ში');
        console.log('შეიყვანე შემდეგი ტექსტი:');
    });
});