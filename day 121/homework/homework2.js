// 3) შექმენით Express project და დააყენეთ Morgan middleware. გამოიყენეთ app.use(morgan(':method :url :status :response-time ms')). შექმენით GET / და GET /products routes. ორივე route გამოიძახეთ ბრაუზერიდან ან Postman-იდან და დააკვირდით log-ებს. კომენტარებში ახსენით რას ნიშნავს :method, :url, :status და :response-time პარამეტრები

const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan(':method :url :status :response-time ms'));

app.get("/", (req, res) => {
    res.send("Welcome to Home Page");
});

app.get("/products", (req, res) => {
    res.send("Products Page");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

/*

:method
- აჩვენებს HTTP მეთოდს (GET, POST, PUT, DELETE და ა.შ.)

:url
- აჩვენებს მოთხოვნილი URL-ის მისამართს
  მაგალითად: / ან /products

:status
- აჩვენებს HTTP სტატუს კოდს
  მაგალითად:
  200 = წარმატებული მოთხოვნა
  404 = გვერდი ვერ მოიძებნა
  500 = სერვერის შეცდომა

:response-time
- აჩვენებს რამდენ დროში უპასუხა სერვერმა მოთხოვნას
  მილიწამებში (ms)

Morgan არის logging middleware, რომელიც ავტომატურად წერს
request-ების შესახებ ინფორმაციას კონსოლში და გვეხმარება
აპლიკაციის მონიტორინგსა და debugging-ში.
*/