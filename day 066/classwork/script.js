let name = "gio"

let account = {
    username: name,
    password: "anererna"
}

let namefield = "username"

let account2 = {
    [namefield]: "gio",
    password: "nsrgns"
}



let account3 = {
    username:"giorgi",
    balance: 320,
    deposit: function (amount) {
        this.balance += amount
    }
}
account.deposit(120)


let lastname = "lastname"

let person = {
    [first + name]: "gio",
    [lastname]: "megreli"
}

let account4 = {
    username:"giorgi",
    balance: 320,
    deposit (amount) {
        this.balance += amount
    }
}
account.deposit(120)
account.deposit(200)
console.log(account4.balance)


let [data1,data2,data3] = dataArr


const person9 = {
    username: "sdas",
    dinosaur: false, // not sure
    heigth: 20000
}
const {dinosaur, username:wegfeq, heigth} = person9

console.log(username)
console.log(dinosaur)
console.log(heigth)
console.log(person9)

//spread
const nums = [33,23,32,32,2,1]
const numbers = [12,232,54,...nums,76,3]
console.log(numbers)

const [num1, num2, ...others] = numbers

console.log(num1)
console.log(num2)
console.log(others)
//rest
function smth(argument1, ...others) {
    console.log(`first ${argument1}`)
    console.log(`others ${others}`)
}
smth("wqdwef", 23,true, "ewfwef", 234)

let person1 = {
    username: 'gio',
    mobile: "555555***"
}
let person2 = {
    balance: 300
}
let person3 = {
    email: "gio@jwja",
    username: "luka"
}
let combined = Object.assign(person1, person2, person3)
console.log(combined)