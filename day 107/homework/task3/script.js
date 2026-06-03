// 4) ახსენით რა არის Streams Node.js-ში, რას ნიშნავს readable და writable stream, რატომ არის stream-ები ეფექტური დიდი ფაილებისთვის (memory usage). ჩამოთვალეთ ძირითადი მეთოდები (pipe, on('data'), on('end'))

// Stream არის მონაცემების (data) ნაკადი, რომელიც საშუალებას გვაძლევს ინფორმაცია ნაწილ-ნაწილ (chunks) წავიკითხოთ ან ჩავწეროთ, მთლიანი ფაილის მეხსიერებაში ჩატვირთვის გარეშე.

// Readable Stream გამოიყენება მონაცემების წასაკითხად:

// ფაილის წაკითხვა (fs.createReadStream())
// HTTP Request
// process.stdin


// Writable Stream გამოიყენება მონაცემების ჩასაწერად.

// მაგალითები:

// ფაილში ჩაწერა (fs.createWriteStream())
// HTTP Response
// process.stdout


// რატომ არის Stream-ები ეფექტური?

// თუ ფაილი ძალიან დიდია:

// იზრდება Memory Usage
// პროგრამა ნელდება


// on('data')

// გამოიძახება ყოველ ჯერზე, როცა ახალი chunk მოდის.

// const fs = require("fs");

// const stream = fs.createReadStream("data.txt");

// stream.on("data", (chunk) => {
//     console.log(chunk.toString());
// });


// on('end')

// გამოიძახება მაშინ, როცა მონაცემების წაკითხვა დასრულდება.

// const fs = require("fs");

// const stream = fs.createReadStream("data.txt");

// stream.on("end", () => {
//     console.log("ფაილის წაკითხვა დასრულდა");
// });


// pipe()

// pipe() ავტომატურად გადასცემს მონაცემებს ერთი stream-იდან მეორეში.

// const fs = require("fs");

// const readStream = fs.createReadStream("input.txt");
// const writeStream = fs.createWriteStream("output.txt");

// readStream.pipe(writeStream);