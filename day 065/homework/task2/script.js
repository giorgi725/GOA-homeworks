// 3) შექმენით სამი ცვლადი var, let და const გამოყენებით. var-ით შექმენით მომხმარებლის სახელი, let-ით ასაკი და const-ით ქვეყანა. კომენტარებით ახსენით რა განსხვავებაა var let const შორის და რატომ ვერ ვცვლით const-ს. დაბეჭდეთ ყველა მნიშვნელობა template string-ით: `My name is ${name}, I am ${age}, I live in ${country}

var name = "giorgi"
let age = 17
const country = "georgia"

console.log(`My name is ${name}, I am ${age} years old, i live in ${country}`)

// var:
// აქვს function scope (არ აქვს block scope)
// შეიძლება თავიდან გამოცხადება
// შეიძლება მნიშვნელობის შეცვლა

// let:
// აქვს block scope (მუშაობს მხოლოდ { } შიგნით)
// ვერ გამოცხადდება მეორედ იგივე scope-ში
// შეიძლება მნიშვნელობის შეცვლა

// const:
// აქვს block scope
// ვერ გამოცხადდება მეორედ
// ვერ შეიცვლება მნიშვნელობა