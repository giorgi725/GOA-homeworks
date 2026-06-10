const http = require('http')

const server = http.createServer((req, res) => {
    const { method } = req;
    switch (method) {
        case "GET":
            res.end("");
        case "POST":
            return postMethod(req, res);
        case "PUT":
            res.end();
        case "DELETE":
            res.end();
        default:
            res.end("");
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})



// const products = [
//     {id: 1, name: "Apple", price: 2300},
//     {id: 2, name: "peach", price: 243},
//     {id: 3, name: "orange", price: 35}
// ]

// routing - პროცესი serverze სხვადასხვა მისამართის და ტიპის მოთხოვნების საპასუხო გზების დამატება

// route 
// const newurl = new URL("https://www.localhost3000/profile/user?user=gio")

// console.log(newurl)

// const server = http.createServer((req, res) => {
//     // const  {url} = req
//     // console.log(url)

//     const reqUrl = new URL("https://www.localhost3000/" + req.url)
//     console.log(reqUrl)

//     if (reqUrl.pathname = "/product") {
//         res.end(JSON.stringify(products))
//     } else if(reqUrl.pathname === "/home") {
//         res.end("home")
//     } else {
//         res.end("ar arsebobs maseti rame")
//     }

//     if (req.url === "/products"){
//         res.end(JSON.stringify(products))
//     } else if(req.url === "/home") {
//         res.end("home")
//     } else {
//         res.end("ar arsebobs maseti rame")
//     }
//     console.log(req.url)
// })