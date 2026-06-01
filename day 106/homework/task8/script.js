// 9) დაწერეთ პროგრამა, რომელიც:
// - შექმნის ახალ ფაილს fs.writeFile()-ით  
// - შემდეგ დაამატებს ტექსტს fs.appendFile()-ით  
// - ბოლოს გადაარქმევს ფაილს fs.rename()-ით

const fs = require('fs');

const oldFileName = 'gtr.txt';
const newFileName = 'fwe.txt';

fs.writeFile(oldFileName, 'qteba4', (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log('ფაილი შეიქმნა!');

    fs.appendFile(oldFileName, 'ewfefw', (err) => {
        if (err) {
            console.log('Append error:', err.message);
            return;
        }

        fs.rename(oldFileName, newFileName, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(`new name: ${newFileName}`);
        });
    });
});