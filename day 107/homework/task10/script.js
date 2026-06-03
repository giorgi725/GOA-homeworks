// 11) დაწერეთ პროგრამა, სადაც:
// - შექმნით http server-ს  
// - სხვადასხვა URL-ზე (/, /about) დააბრუნებთ სხვადასხვა ტექსტს  
// - გამოიყენებთ res.writeHead() status code-ებისთვის  
// - დაასრულებთ response-ს res.end()-ით

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the Home Page");
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the About Page");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});