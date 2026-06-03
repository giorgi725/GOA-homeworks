// 5) დაწერეთ პროგრამა, სადაც:
// - გამოიყენებთ fs.createReadStream()  
// - წაიკითხავთ დიდ ტექსტურ ფაილს ნაწილ-ნაწილ  
// - დაბეჭდავთ თითო chunk-ს კონსოლში  
// - და დააფიქსირებთ როდის დასრულდა კითხვა (end event)

const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", {
    encoding: "utf8"
});

readStream.on("data", (chunk) => {
    console.log(chunk);
});

readStream.on("end", () => {
    console.log("ფაილის წაკითხვა დასრულდა!");
});

readStream.on("error", (err) => {
    console.error(err.message);
});