// 9) დაწერეთ პროგრამა, სადაც:
// - გააგზავნით request-ს საჯარო API-ზე (მაგ: JSON placeholder)  
// - მიიღებთ მონაცემებს  
// - დაბეჭდავთ response-ს კონსოლში  

const https = require("https");

https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
    let data = "";
    res.on("data", (chunk) => {
        data += chunk;
    });

    res.on("end", () => {
        console.log("Response:");
        console.log(JSON.parse(data));
    });

}).on("error", (err) => {
    console.log(err.message);
});