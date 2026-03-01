// const person = {
//     username : "gio",
//     occupation: "coding",
//     interest: ["chess", "History"],

//     get header() {
//         return `${this.username} is ${this.occupation} and is interesed in ${this.interest}`
//     },
//     set interest(value) {
//         this.interest.push(value)
//     }
// }
// console.log(person.header)

// person.interest = "web developer"
// console.log(person.occupation)

class square {
    //# - it iwereba private
    //#password
    static squares = 0;
    constructor(width) {
        this.heigth - width
        this.width = width
        square.squares +=1
    }
    get area() {
        return this.width * this.heigth
    }
    set area(value) {
        this.heigth = Math.sqrt(value);
        this.width = this.heigth
    }
}
let square1 = new square(4)
console.log(square1.area)

square1.area = 36
console.log(square1.width)

//set - შეუძლია ნებისმიერი კლასის კუთვნილება შეცვალოს
//get - ვიგებთ ნებისმიერი კლასის კუთვნილებას


//ობიექტში გვაქ დაცული კუთვნილებები 2 ტიპის
//protected - რომელიც იწერება _ რეალურად ფუნქციონალურად არანაირი ცვლილება არ არის

class Bank {
    #balance
    constructor(user, email, password, balance){
    this.user = user,
    this.email = email,
    this.password = password,
    this.#balance = balance
    }
    get password() {
        let displaypass = this.password.length * '#'
        for (let i = 0; i < Math.floor(this.password.length) / 2; i++) {
            displaypass[i] = this._password[i]
        }
        return displaypass
    }
    get balance() {
        return this.#balance
    }

    set balance (v) {
        if (v < 0) {
            console.log("balance must be positive")
        } else {
            console.log(`current balance: ${v}`)
        }
    }
}

let account1 = new Bank("gio", "dasfew@qdw", "12345678", 344)
console.log(account1.balance)

account1.balance = 200
console.log(account1.balance)