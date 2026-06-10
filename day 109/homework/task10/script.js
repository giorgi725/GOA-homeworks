// 11) დაწერეთ პროგრამა (სიმულაცია database-ის):
// - შექმნით array-ს როგორც fake database  
// - GET → დააბრუნებს ყველა მონაცემს  
// - POST → დაამატებს ახალ მონაცემს  
// - გამოიყენებთ JSON-ს მონაცემების გადასაცემად  

const http = require("http");

let users = [
    { id: 1, name: "Giorgi" },
    { id: 2, name: "Nika" }
];

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/users") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(users));
    }

    else if (req.method === "POST" && req.url === "/users") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const newUser = JSON.parse(body);
            users.push(newUser);
            res.writeHead(201, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message: "User added successfully",
                user: newUser
            }));
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
            message: "Route not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});