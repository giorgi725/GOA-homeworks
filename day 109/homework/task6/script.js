// 7) დაწერეთ პროგრამა, სადაც:
// - გამოიყენებთ სხვადასხვა HTTP მეთოდებს (GET, POST, PUT, DELETE)  
// - თითოეულზე დააბრუნებთ შესაბამის ტექსტს  
// - გამოიყენებთ switch(req.method)  

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    
    switch (req.method) {
        case "GET":
            res.end("GET request - Reading data");
        case "POST":
            res.end("POST request - Creating data");
        case "PUT":
            res.end("PUT request - Updating data");
        case "DELETE":
            res.end("DELETE request - Deleting data");
        default:
            res.writeHead(405, { "Content-Type": "text/plain" });
            res.end("Method Not Allowed");
    }
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});