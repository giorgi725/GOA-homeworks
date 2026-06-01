// 10) გააკეთეთ პროგრამა async/await-ით (fs/promises), სადაც:
// - წაიკითხავთ ფაილს  
// - ჩაწერთ ახალ ფაილში  
// - დაამატებთ დამატებით ტექსტს  
// - გამოიყენებთ try/catch error handling-ს

const fs = require('fs/promises');

const sourceFile = 'input.txt';
const newFile = 'output.txt';

async function processFiles() {
    try {
        const data = await fs.readFile(sourceFile, 'utf8');
        console.log(data);

        await fs.writeFile(newFile, data);

        await fs.appendFile(newFile, 'braswvef');

    } catch (err) {
        console.log(err.message);
    }
}

processFiles();