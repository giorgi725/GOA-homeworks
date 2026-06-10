// 12) შექმენით პროგრამა, სადაც:
// - მიიღებთ query parameters-ს (მაგ: /user?id=1)  
// - მოძებნით შესაბამის მონაცემს fake database-ში  
// - დააბრუნებთ შედეგს ან 404 თუ ვერ მოიძებნა  

const http = require("http");
const url = require("url");

const users = [
    { id: 1, name: "Giorgi" },
    { id: 2, name: "Nika" },
    { id: 3, name: "Luka" }
];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === "/user" && req.method === "GET") {
        const userId = Number(parsedUrl.query.id);
        const user = users.find(user => user.id === userId);
        
        if (user) {
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "User not found"
            }));
        }
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }

});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});