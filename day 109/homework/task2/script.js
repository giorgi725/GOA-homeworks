// 3) დაწერეთ პროგრამა, სადაც:
// - შექმნით http server-ს  
// - გამოიყენებთ req.url-ს  
// - სხვადასხვა path-ზე (/home, /contact, /products) დააბრუნებთ განსხვავებულ პასუხებს  
// - default შემთხვევაში დააბრუნებთ 404 ტექსტს  

const http = require('http')


const server = http.createServer((res, req) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About');
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('contact')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }
})

server.listen(3000, () => {console.log("3000 port is running")})