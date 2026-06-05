const hhtp = require("http")

const Server = hhtp.createServer()

const Server = http.createServer((req,res) => {
    let body = ""
    req.on("data", chunk => {
        // console.log(chunk.toString())
        // console.log(JSON.parse(chunk))
        body += chunk.toString()

        res.write()
        res.end(body)
    })
});

Server.listen(3000, () => console.log("server running on port 3000"))