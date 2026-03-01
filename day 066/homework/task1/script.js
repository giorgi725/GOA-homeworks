// 2) შექმენით ობიექტი user, სადაც property-ის სახელი უნდა იყოს დინამიური ცვლადიდან მიღებული. გამოიყენეთ computed property syntax [variable] და დაამატეთ username, email და score ველები. შემდეგ შექმენით ფუნქცია increaseScore(amount), რომელიც გაზრდის score-ს

const dynamicKey = "id";

const user = {
    [dynamicKey]: 1,  
    username: "giorgi",
    email: "giorgi@gmail.com",
    score: 0
};
function increaseScore(amount) {
    user.score += amount;
}
increaseScore(10);
console.log(user);

// 3) შექმენით person ობიექტი firstName, lastName და age ველებით. გამოიყენეთ object destructuring და აიღეთ firstName და age ცალკე ცვლადებში. სცადეთ ისეთი ველის დესტრუქტურიზაცია რომელიც ობიექტში არ არსებობს და დააკვირდით მიღებულ მნიშვნელობას

const person = {
    firstname: "gio",
    lastname: "megreli",
    age: 17
}
const { firstname, age } = person;
console.log(firstname);
console.log(age);    

const {country} = person;
console.log(country);

// 4) შექმენით მასივი passwords სამი ელემენტით. გამოიყენეთ array destructuring თითოეულის მისაღებად. დაამატეთ მეოთხე ელემენტი და გამოიყენეთ rest operator დარჩენილი ელემენტებისთვის

const passwords = ["egrerr", "qwerty", "grrge"];

const [firstPass, secondPass, thirdPass] = passwords;
console.log(firstPass);  
console.log(secondPass);  
console.log(thirdPass);   

passwords.push("newPassword");

const [first, ...restPasswords] = passwords;

console.log(first); 
console.log(restPasswords);

// 5) შექმენით ფუნქცია calcSum(first, ...numbers) რომელიც დაბეჭდავს პირველ რიცხვს და დანარჩენი რიცხვების ჯამს

function calcSum(first, ...numbers) {
    console.log(first)
    console.log(numbers)
}
calcSum(12,23,31,32,31,23,34,34,45)

// 6) შექმენით ორი მასივი და მესამე მასივი მათი გაერთიანებით spread operator-ის გამოყენებით. შეადარეთ შედეგი იმ შემთხვევას როცა მასივს ჩასვამთ პირდაპირ სხვაში

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedWithSpread = [...arr1, ...arr2];
console.log(combinedWithSpread); //[1,2,3,4,5,6]

const combinedDirect = [arr1, arr2];
console.log(combinedDirect); // [[1,2,3], [4,5,6]]

// 7) შექმენით class BankAccount owner და balance ველებით. დაამატეთ deposit(amount) მეთოდი და static ცვლადი accountsCount. შექმენით ორი ობიექტი და გამოიძახეთ getAccountsCount()

class BankAccount {
    static accountsCount = 0;
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
        BankAccount.accountsCount++;
    }
    deposit(amount) {
        this.balance += amount;
    }
    static getAccountsCount() {
        return BankAccount.accountsCount;
    }
}
const acc1 = new BankAccount("Giorgi", 1000);
const acc2 = new BankAccount("Nika", 500);

acc1.deposit(200);
acc2.deposit(300);

console.log(acc1.balance); 
console.log(acc2.balance);

console.log(BankAccount.getAccountsCount());

// 8) შექმენით class User _password ველით და getter password მეთოდით, რომელიც აბრუნებს პაროლს

class User {
    constructor(password) {
        this._password = password
    }
    get password() {
        return this._password;
    }
}
const user1 = new User("Secret");
console.log(user1.password);


// 9) შექმენით ორი ობიექტი: userInfo და userStats. userInfo-ში იყოს firstName და lastName, userStats-ში იყოს score და level. გამოიყენეთ Object.assign() ახალი ობიექტის შესაქმნელად სახელად fullUser. შემდეგ შეცვალეთ fullUser.score და დააკვირდით შეიცვალა თუ არა ორიგინალი ობიექტი. კომენტარებით ახსენით რატომ

userinfo = {
    firstname: "gio",
    lastname: "megreli"
}
userstats = {
    score: 100,
    level: 12
}
const fullUser = Object.assign({}, userInfo, userStats);

console.log(fullUser);
fullUser.score = 200;

console.log(fullUser.score);   
console.log(userStats.score);

// 10) შექმენით მასივი numbers მინიმუმ 5 რიცხვით. გამოიყენეთ destructuring ისე რომ პირველი ორი რიცხვი შეინახოთ ცვლადებში და დანარჩენი rest operator-ით შეინახოთ სხვა ცვლადში. დაბეჭდეთ ყველა ცვლადი. შემდეგ შექმენით ახალი მასივი სადაც spread operator-ით დაამატებთ numbers მასივს შუაში

numbers = [21,32,54,56,67]

const [first1,second, ...rest] = numbers

const newArray = [1, 2, ...numbers, 100, 200];
console.log(newArray);

// 11) შექმენით arrow function multiply რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის გაორმაგებულ მნიშვნელობას. შემდეგ შექმენით მეორე arrow function sumAll რომელიც მიიღებს განუსაზღვრელი რაოდენობის რიცხვებს (rest) და დააბრუნებს მათ ჯამს. ორივე ფუნქცია გამოიძახეთ მაგალითებით

const multiply = (num) => {
    return num * 2
}
console.log(23)
const sumAll = (...numbers) => {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
};
console.log(sumAll(1, 2, 3));        
console.log(sumAll(10, 20, 30, 40));

// 12) შექმენით ობიექტი student სადაც ორი property-ის სახელი უნდა იყოს დინამიური: ერთი ცვლადიდან, მეორე string კონკატინაციით (მაგალითად ["exam" + "Score"]). დაამატეთ ასევე age და ქალაქი. გამოიყენეთ object destructuring და ამოიღეთ age და examScore ცვლადებში. დაბეჭდეთ შედეგი

const username = "name";

const student = {
    [username]: "Giorgi",
    ["exam" + "Score"]: 95,
    age1: 20,
    city: "Tbilisi"
};
console.log(student);

const {age1,examScore } = student;

console.log(age); 
console.log(examScore); 

// 13) შექმენით ფუნქცია showUser რომელიც მიიღებს ობიექტს პარამეტრად და პირდაპირ პარამეტრში მოახდინეთ destructuring (მაგალითად {username, score}). დაბეჭდეთ მიღებული მნიშვნელობები. გამოიძახეთ ფუნქცია ობიექტის გადაცემით

const showUser = ({ username, score }) => {
    console.log("Username:", username);
    console.log("email:", email)  
    console.log("Score:", score);
};
const user2 = {
    username: "Giorgi",
    email: "giorgi@gmail.com",
    score: 120
};
showUser(user2);

// 14) შექმენით მასივი fruits მინიმუმ 4 ელემენტით. გამოიყენეთ destructuring სადაც:
// - პირველი ელემენტი შეინახეთ ცვლადში
// - მესამე ელემენტი შეინახეთ სხვა ცვლადში (მეორე გამოტოვეთ)
// - დანარჩენი ელემენტები rest-ით შეინახეთ სხვა ცვლადში
// დაბეჭდეთ ყველა შედეგი

const fruits = ["grapes", "peach", "banana", "apple"]

const [firstFruit, , thirdFruit, ...restFruits] = fruits;
console.log(firstFruit); 
console.log(thirdFruit);
console.log(restFruits);

// 15) შექმენით ობიექტი settings. შემდეგ შექმენით მისი shallow copy ორი გზით:
// 1) Object.assign()
// 2) spread operator
// შეცვალეთ copy ობიექტში ერთ-ერთი property და შეადარეთ შედეგები. კომენტარებში ახსენით რას ნიშნავს shallow copy

// 1️⃣ ობიექტი settings
const settings = {
    theme: "dark",
    fontSize: 16,
};
console.log("Original settings:", settings);

const copyAssign = Object.assign({}, settings);

const copySpread = { ...settings };

copyAssign.theme = "light";
copySpread.fontSize = 20;

console.log("After changes:");
console.log("Original settings:", settings);
console.log("copyAssign:", copyAssign);
console.log("copySpread:", copySpread);

//16) შექმენით arrow function calculate რომელიც მიიღებს პირველ რიცხვს და დანარჩენებს rest operator-ით. დააბრუნეთ ობიექტი სადაც იქნება:
// - firstNumber
// - sumOfOthers
// - countOfOthers
// გამოიძახეთ ფუნქცია მაგალითით და დაბეჭდეთ დაბრუნებული ობიექტი

const calculate = (firstNumber, ...restNumbers) => {
    return {
        firstNumber: firstNumber,
        sumOfOthers: restNumbers.reduce((acc, num) => acc + num, 0),
        countOfOthers: restNumbers.length
    };
};

const result = calculate(10, 20, 30, 40);
console.log(result);