// 6) შექმენით პროგრამა, სადაც:
// - გამოიყენებთ fs.createReadStream() და fs.createWriteStream()  
// - დააკოპირებთ ერთი ფაილის შიგთავსს მეორეში pipe()-ის გამოყენებით  
// - დაბეჭდავთ შეტყობინებას პროცესის დასრულებისას


const fs = require("fs");

const readStream = fs.createReadStream("source.txt");

const writeStream = fs.createWriteStream("destination.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
    console.log("ფაილის დაკოპირდა");
});

readStream.on("error", (err) => {
    console.error("Read Error:", err.message);
});

writeStream.on("error", (err) => {
    console.error("Write Error:", err.message);
});