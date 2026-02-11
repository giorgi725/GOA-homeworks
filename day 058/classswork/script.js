// // Constructor Function
// function book (title, author, year){
//         this.title = title
//         this.author = author
//         this.year = year
// }
// const ww2 = new book("world war 2", "hitler", 1939)
// console.log(ww2.title)
// console.log(ww2.author)
// console.log(ww2.year)
// console.log(ww2)


// // literal გზით {}
// let book1= {
//     title: "ww2",
//     author: "hitler",
//     pages: 450,
//     year: 1939,
//     isGoodBook: false,
// };
// console.log(book.title);
// console.log(book.author);
// console.log(book.pages);
// console.log(book.year);
// console.log(book.isGoodBook);

// // primitive :number: 88, string: "hello", boolean : true or false

// //Stack - პატარა მონაცემები
// //Heap - რთული მონაცემები

// let age = 88
// let academy = "GOA"

// let name = { 
//     name: "Gio" 
// };
// let secondName = name;
// secondName.name = "luka";

let dataBase = [];

function Account(name, email, password, age) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.age = age;
}
let form = document.getElementById("regForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    let newUser = new Account(name, email, password, age);
    dataBase.push(newUser);
    
    console.log(dataBase);
    form.reset();
})