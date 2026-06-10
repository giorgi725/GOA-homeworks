// 2) ახსენით რა არის Routing Node.js-ში, როგორ ვამუშავებთ სხვადასხვა URL-ებს (req.url), და რატომ ვიყენებთ routing-ს server-ში. მოიყვანეთ მარტივი მაგალითი

// Routing არის პროცესი, რომლის დროსაც სერვერი ამოწმებს მომხმარებლის მიერ მოთხოვნილ URL-ს და შესაბამის პასუხს აბრუნებს.

// Node.js-ში HTTP სერვერზე მოთხოვნის მისამართი ხელმისაწვდომია req.url თვისების საშუალებით. მისი გამოყენებით შეგვიძლია სხვადასხვა URL-ისთვის სხვადასხვა ლოგიკა შევასრულოთ.

// რატომ ვიყენებთ Routing-ს?

// Routing-ის დახმარებით:

// / - მთავარი გვერდი
// /about - About გვერდი
// /contact - საკონტაქტო გვერდი

// თითოეულ URL-ს შეუძლია განსხვავებული ინფორმაცია დააბრუნოს.

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Home');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('About');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page Not Found');
    }

});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});