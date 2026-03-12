// 1) ახსენით როგორ მუშაობს  საიტერაციო ობიექტების მეთოდები: map, filter, forEach, reduce 

// forEach - გადის მასივზე და თითოეულ ელემენტზე ასრულებს ფუნქციას.

// map - გადის მასივზე, ასრულებს ფუნქციას თითოეულ ელემენტზე და ქმნის ახალ მასივს შედეგებით.

// filter - გადის მასივზე, შეამოწმებს თითოეული ელემენტის პირობას (callback-ის მიერ დაბრუნებულ true/false მნიშვნელობას) და ქმნის ახალ მასივს, რომელიც შეიცავს მხოლოდ ისეთ ელემენტებს, რომლებიც პირობას აკმაყოფილებს.

// reduce - გადის მასივზე და თითოეული ელემენტის მიხედვით კომპიუტაციას აკეთებს, საბოლოოდ აბრუნებს ერთ შედეგს

// 2) შექმენით ობიექტი user ველებით name და age და მეორე ობიექტი details ველებით city და country გამოიყენეთ spread ოპერატორი რომ ეს ორი ობიექტი გააერთიანოთ ახალ ობიექტში fullUser და კონსოლში გამოიტანეთ საბოლოო შედეგი კომენტარებით ახსენით როგორ მუშაობს ... ოპერატორი ობიექტების გაერთიანებისას

const user = {
    name: "Giorgi",
    age: 25
};

const details = {
    city: "Tbilisi",
    country: "Georgia"
};
const fullUser = {
    ...user,   
    ...details  
};
console.log(fullUser);

// 3) შექმენით ფუნქცია sumAll რომელიც იღებს ნებისმიერ რაოდენობის რიცხვს rest ოპერატორის გამოყენებით შემდეგ დაითვალეთ ამ რიცხვების ჯამი და დააბრუნეთ შედეგი მაგალითზე გამოიძახეთ ფუნქცია სხვადასხვა რაოდენობის არგუმენტით და კომენტარებით ახსენით რას აკეთებს rest ოპერატორი
const numbers = [23,234,21,2432,43,45]
function sumAll (...rest) {
    let sum = 0;
    for (let num of rest) {
        sum += num; 
    }
    return sum;
}
console.log(sumAll(numbers))

// 4) შექმენით Account კლასი და გამოიყენეთ ყველა ნასწავლი კონცეფცია კლასებზე. კლასში უნდა გქონდეთ საჯარო ველები და პირადი ველი #password. გამოიყენეთ constructor სადაც მიიღებთ firstname lastname და password მნიშვნელობებს. შექმენით getter და setter მეთოდები password ველისთვის და ახსენით კომენტარებით როგორ მუშაობს მათი დანიშნულება. დაამატეთ static ველი count რომელიც დაითვლის რამდენი ობიექტი შეიქმნა და static მეთოდი objectCount რომელიც ზრდის ამ მნიშვნელობას ყოველ ახალ ობიექტზე. ასევე მოიყვანეთ მაგალითი პირადი მეთოდის გამოყენებაზე და კომენტარებით ახსენით განსხვავება ჩვეულებრივ მეთოდსა და static მეთოდს შორის

class Account{
    static count = 0
    #password
    constructor(firstname,lastname,password) {
        this.firstname = firstname
        this.lastname = lastname
        this.#password = password

        Account.objectCount()
    }
    get password() {
    return this.#password;
    }
    set password(newPassword) {
        if (newPassword.length >= 6) {
        this.#password = newPassword;
        } else {
        console.log("Password must be at least 6 characters.");
        }
    }
    static objectCount() {
        Account.count++;
    }
}
const user1 = new Account("Giorgi", "Megreli", "wef233wef456");
const user2 = new Account("Joe", "Doe", "abcdwfweffewef")

console.log(Account.count); 

// 5) შექმენით myArr მასივი ["AB","CD","ED"] გამოიყენეთ map მეთოდი რომ დააბრუნოთ ახალი მასივი სადაც თითოეულ ელემენტს ბოლოში ემატება თავისი ინდექსი მაგალითად "AB#0" შემდეგ იგივე შედეგი მიიღეთ თქვენი manualMap ფუნქციის გამოყენებით და კომენტარებში ახსენით callback ის სამი პარამეტრი value index და arr

const myArr = ["AB", "CD", "ED"];

const mappedArr = myArr.map((value, index, ) => {
    return value + "#" + index;
});

console.log(mappedArr); 

function manualMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}
const manualMappedArr = manualMap(myArr, (value, index, ) => {
return value + "#" + index;
});
console.log(manualMappedArr);

// 6) მოცემული გაქვთ numbersArr = [12,15,17,12,15,36,23,6,2,6] გამოიყენეთ filter მეთოდი რომ მიიღოთ მხოლოდ ლუწი რიცხვები შემდეგ იგივე ლუწი რიცხვების გაფილტვრა გააკეთეთ manualFilter ფუნქციით და ახსენით რა ხდება ნაბიჯ ნაბიჯ თქვენი სიტყვებით

let numbersarr = [12,15,17,12,15,36,23,6,2,6];
const evenNumbers = numbersarr.filter((value) => {
    return value % 2 === 0; 
});
console.log(evenNumbers);

function manualFilter(array, callback) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
        result.push(array[i]);
        }
    }
    return result; 
}

const manualEvenNumbers = manualFilter(numbersarr, (value) => value % 2 === 0);
console.log(manualEvenNumbers); 

// 7) შექმენით fruits მასივი ['apple','banana','orange'] გამოიყენეთ forEach რომ console.log ში დაბეჭდოთ თითოეული ხილი დიდი ასოებით შემდეგ იგივე შედეგის მისაღებად გამოიყენეთ manualForEach და კომენტარებით ახსენით რა მნიშვნელობები გადაეცემა callback ფუნქციას თითო იტერაციაზე

const fruits = ['apple', 'banana', 'orange'];


fruits.forEach((value) => {
    console.log(value.toUpperCase());
});

function manualForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
manualForEach(fruits, (value) => {
    console.log(value.toUpperCase());
});

// 8) გამოიყენეთ numbersArr მასივი და reduce მეთოდი რომ იპოვოთ ყველა რიცხვის ჯამი და ნამრავლი გამოიყენეთ საწყისი მნიშვნელობა მაგალითად 0 ან 1 შემდეგ იგივე ოპერაციები შეასრულეთ manualReduce ფუნქციით და თქვენი სიტყვებით ახსენით რას ცვლის საწყისი მნიშვნელობა ჯამისა და ნამრავლის დათვლის პროცესში

const numbersArr = [12, 15, 17, 12, 15, 36, 23, 6, 2, 6];

const sum = numbersArr.reduce((acc, currentValue) => {
    return acc + currentValue;
}); 

console.log("Sum:", sum); 

const product = numbersArr.reduce((acc, currentValue) => {
    return acc * currentValue;
}, 1);
console.log("Product:", product);

function manualReduce(array, callback, initialValue) {
    let acc = initialValue; 
    for (let i = 0; i < array.length; i++) {
        acc = callback(acc, array[i], i, array);
    }
    return acc;
}
const manualSum = manualReduce(numbersArr, (acc, val) => acc + val, 0);
console.log("Manual Sum:", manualSum);

const manualProduct = manualReduce(numbersArr, (acc, val) => acc * val, 1);
console.log("Manual Product:", manualProduct);

// 9) შექმენით manualMap ფუნქცია რომელიც იღებს მასივს და callback ფუნქციას და აბრუნებს ახალ მასივს გამოიყენეთ ეს manualMap numbersArr მასივზე რომ შექმნათ ახალი მასივი სადაც ყველა რიცხვი გაორმაგებულია შემდეგ იგივე გააკეთეთ ჩაშენებული map მეთოდით და შეადარეთ მიღებული შედეგები

const numbersArr2 = [12, 15, 17, 12, 15, 36, 23, 6, 2, 6];

function manualMap1(array, callback) {
    const result = []; 
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array)); 
    }
    return result;
}
const doubledManual = manualMap1(numbersArr2, (value) => value * 2);
console.log("Manual Map:", doubledManual);

const doubledMap = numbersArr2.map((value) => value * 2);
console.log("Built-in Map:", doubledMap);

//10) გამოიყენეთ manualReduce ფუნქცია რომ იპოვოთ numbersArr მასივის მაქსიმალური ელემენტი callback ში შეადარეთ acc და cur და ყოველთვის შეინახეთ უფრო დიდი მნიშვნელობა იგივე ამოცანა შეასრულეთ ჩაშენებული reduce მეთოდით და დაადასტურეთ რომ ორივე შედეგი ემთხვევა

const numbersArr1 = [4, 9, 2, 15, 7, 1];

function manualReduce2(arr, callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < arr.length; i++) {
        acc = callback(acc, arr[i]);
    }
    return acc;
}
const maxManual = manualReduce2(numbersArr1, (acc, cur) => {
    return acc > cur ? acc : cur;
}, numbersArr[0]);

console.log(maxManual);

//11) შექმენით names მასივი ['John','Jane','Mike','Anna'] გამოიყენეთ map რომ მიიღოთ ახალი მასივი სადაც თითოეული ელემენტის მნიშვნელობა არის სახელის სიგრძე შემდეგ იგივე გააკეთეთ manualMap ფუნქციით ბოლოს გამოიყენეთ reduce ან manualReduce რომ იპოვოთ ყველა სიგრძის ჯამი და ახსენით როგორ იცვლება acc თითო იტერაციაზე

const name = ['John','Jane','Mike','Anna'] 

const lengths = name.map(name => name.length)

function manualMap3(arr, callback){
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push(callback(arr[i], i, arr))
    }
    return result
}
const lengthsManual = manualMap3(name, name => name.length)
const sum1 = lengths.reduce((acc, cur) => acc + cur, 0)

//12) შექმენით numArr მასივი [1,2,3,4,5,6,7,8] გამოიყენეთ filter მეთოდი რომ მიიღოთ მხოლოდ მარტივი ანუ პრაიმ რიცხვები შემდეგ სცადეთ იგივე ამოცანა manualFilter ფუნქციით და აღწერეთ თქვენი სიტყვებით როგორ ამოწმებთ არის თუ არა რიცხვი პრაიმი

const numarr = [1,2,3,4,5,6,7,8]

function isPrime(num){
    if(num < 2){
        return false
    }
    for(let i = 2; i < num; i++){
        if(num % i === 0){
        return false
        }
    }
    return true
}
const primes = numarr.filter(isPrime)


function manualFilter3(arr, callback){
    const result = []
    for(let i = 0; i < arr.length; i++){
        if(callback(arr[i])){
        result.push(arr[i])
        }
    }
    return result
}
const primesManual = manualFilter3(numarr, isPrime)

// 13) შექმენით მასივი arr სადაც თითო ელემენტი არის ობიექტი ველებით id და name მაგალითად [{id:123,name:"luka"},{id:456,name:"ana"}] გამოიყენეთ map მეთოდი რომ მიიღოთ ახალი მასივი სადაც დარჩება მხოლოდ სახელები შემდეგ იგივე გააკეთეთ manualMap ფუნქციით და კომენტარებში ახსენით რატომ არის მოსახერხებელი ობიექტებიდან მხოლოდ ერთი ველის ამოღება map მეთოდის საშუალებით

const arr = [
    { id: 123, name: "luka" },
    { id: 456, name: "ana" },
    { id: 789, name: "gio" }
]
const names = arr.map(user => user.name)
console.log(names)


function manualMap5(array, callback){
    const result = []
    for(let i = 0; i < array.length; i++){
        result.push(callback(array[i], i, array))
    }
    return result
}
const namesManual = manualMap5(arr, user => user.name)
console.log(namesManual)

// 14) შექმენით products მასივი name და price ველებით გაფილტრეთ მხოლოდ იაფი პროდუქტები filter ით

const products = [
    {name: "potato", price: 2},
    {name: "tomato", price: 3},
    {name: "banana", price: 4},
    {name: "apple", price: 5}
]
const filtered = products.filter(product => product.price <= 3)
console.log(filtered)

// 15) შექმენით books მასივი title და author ველებით გამოიყენეთ map რომ მიიღოთ სტრინგები ფორმატში "Title by Author"

const books = [
    {title: "smth", author: "someone"},
    {title: "same", author: "Joe"},
    {title: "something", author: "gio"}
]
const bookStrings = books.map(book => `${book.title} by ${book.author}`)

// 16) გაფილტრეთ people მასივი ასაკის მიხედვით 18 ზე ნაკლები და 18 ან მეტი filter ით

const people = [
    {age: 16 },
    {age: 21 },
    {age: 17 },
    {age: 19 }
]
const under18 = people.filter(person => person.age < 18)
const adult18Plus = people.filter(person => person.age >= 18)

// 17) შექმენით numArr და ჯერ გაფილტრეთ 50 ზე მეტი რიცხვები შემდეგ გაანახევრეთ ისინი map ით

const num = [213,32,44,3554,65,765,342]

const plus50 = num.filter(number => number >= 50)
const devide = plus50.map(number => number % 2)

// 18) შექმენით words მასივი და forEach ით დაითვალეთ თითო სიტყვა რამდენჯერ გვხვდება ობიექტში

const words = [
    'apple', 'banana', 'cloud', 'apple', 'river',
    'banana', 'storm', 'light', 'cloud', 'mirror',
    'storm', 'apple', 'river', 'dream', 'mirror'
];
const count = {}
words.forEach(word => {
    if (count[word]) {
        count[word] += 1; 
    } else {
        count[word] = 1; 
    }
});

// 19) რეალური ცხოვრებიდან მოიყვანეთ მაგალითები sync vs async-ზე, მოიძიეთ რაიმე api და ასინქრონული ფუქნციით მის მიერ მოცემული ინფორმაცია დაარენდერეთ. დაასრულეთ ყველა წინა გაკვეთილის დავალებებები განსაკუთრებით Level 65 & 69

// sync - მაგალითად რიგში დგომა 
// async - მაგალითად რაიმე გაქ გამოძახებული და სანამ ეგ მოვა მაქამდე რამეს გააკეთებ
async function api() {
    try{
        const api = await fetch("https://fakestoreapi.com/products")
        const data = await api.json()
        console.log(data)
        data.forEach((el) => {
            document.body.innerHTML += `
                <img width="200" src=${el.image}>
                <p>${el.title}</p>
                <p>${el.price}$</p>
            `
        } )
    }
    catch (e){
        console.log(`error: ${e}`)
    }
}
api()

// 20) შექმენით math.js ფაილი სადაც იქნება export function add(a,b) და export function multiply(a,b) და ბოლოს export default function subtract(a,b) შემდეგ სხვა ფაილში შემოიტანეთ subtract როგორც default და add multiply როგორც named და დაბეჭდეთ შედეგები

import subtract, {add as total, multiply } from "./math.js";

console.log(total(2,3))
console.log(multiply(3,2))
console.log(subtract(8,4))

// 21) შექმენით products.js ფაილი სადაც default export იქნება class Product და მას ექნება name და price ველები დამატებით შექმენით ორი named export ფუნქცია printName და printPrice რომლებიც მიიღებენ პროდუქტს და დაბეჭდავენ ველებს შემდეგ import Product printName printPrice სხვა ფაილში და გამოიყენეთ

import Product, {printName, printPrice} from "./product.js";
let product1 = new Product("car", 1000)
console.log(printName(product1.name))
console.log(printPrice(product1.price))

// 22) შექმენით ფუნქცია safeDivide რომელიც იღებს ორ რიცხვს a და b. გამოიყენეთ try/catch რომ თუ b არის 0 მოხდეს შეცდომის გაშვება throw new Error("Cannot divide by zero") და catch ბლოკში დაიბეჭდოს შესაბამისი შეტყობინება. თუ ყველაფერი სწორია დააბრუნეთ a / b შედეგი. კომენტარებში ახსენით როგორ მუშაობს throw, try და catch ერთად

function safeDivide(a, b){
    try{
        if(b === 0){
            throw new Error("Cannot divide by zero")
        }
        return a / b
    } catch (e){
        console.log(`error: ${e}`)
    }
}
console.log(safeDivide(4,2))

// 23) შექმენით async ფუნქცია getCatFact რომელიც იყენებს fetch-ს API-ზე https://catfact.ninja/fact. გამოიყენეთ try/catch რომ შეცდომის შემთხვევაში კონსოლში დაიბეჭდოს "Error while fetching data". წარმატების შემთხვევაში გამოიტანეთ მიღებული ფაქტი (fact). კომენტარებში ახსენით რა ხდება try ბლოკში და როდის სრულდება catch

async function getCatFact(){
    try{
        const fetchdata = await fetch("https://catfact.ninja/fact")
        const data = await fetchdata.json()
        console.log(data)
        document.body.innerHTML += `
            <p>${data.fact}</p>
        `
    } catch (e){
        console.log(`Error while fetching data`)
    }
}
getCatFact()