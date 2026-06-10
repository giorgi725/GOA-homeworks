// 5) დაწერეთ პროგრამა, სადაც:
// - სხვადასხვა route-ზე დააბრუნებთ სხვადასხვა status code-ს  
// - გამოიყენებთ res.writeHead()  
// - /success → 200  
// - /error → 500  
// - სხვა ყველა → 404  

const http = require('http')

const server = http.createServer((res, req) => {
    if (req.url === "/success") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("Success: Request completed successfully")
    } else if (req.url === "/error") {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.end("Internal Server Error");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Page Not Found");
    }
})

server.listen(3000, () => {
    console.log("port 3000 is runnig")
})