// 11) შექმენით პროგრამა, სადაც:
// - intentionally გამოიწვევთ error-ს (მაგ. არარსებული ფაილის წაკითხვა)  
// - დაამუშავებთ მას try/catch-ით ან callback err-ით  
// - დამატებით გამოიყენებთ process.on("uncaughtException")-ს

const fs = require('fs');

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception');
    console.log('Error:', err.message);
    process.exit(1);
});

try {
    console.log('არარსებული ფაილის წაკითხვა');

    const data = fs.readFileSync('no-such-file.txt', 'utf8');

    console.log(data);
} catch (err) {
    console.log('error:');
    console.log(err.message);
}

fs.readFile('also-missing.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Callback error:');
        console.log(err.message);
        return;
    }
    console.log(data);
});

setTimeout(() => {
    throw new Error('Intentional crash!');
}, 1000);