// 12) შექმენით პროგრამა, სადაც:
// - http server-ში წაიკითხავთ HTML ფაილს fs.readFile()-ით  
// - დააბრუნებთ მას browser-ში  
// - დაამატებთ error handling-ს (თუ ფაილი არ არსებობს → 404)

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {

        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/plain"
            });
            return res.end("404 - File Not Found");
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});