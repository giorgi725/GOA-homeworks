// const hhtp = require("http")

// console.log(hhtp.METHODS)

// const Server = hhtp.createServer()

// 1 patf dailis misamarti
// 2 encryption/interaption informacia enkodirebis gza
// 3 callback funqcia

// const Server = http.createServer((req,res) => {
//     const data = fs.readFile('index.html', 'utf-8', (err, data) => {
//         if (error) {
//         console.log(error)
//         res.writeHead(404)
//         res.write("errorewfjinj")
//     } else {
//         res.writeHead(200,{ "content-type": "text/html" })
//         res.write("error reading html")
//     }
//     })
// });



const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Node.js');
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
