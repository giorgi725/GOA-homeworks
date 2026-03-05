//2) შექმენით studentsMap Map სადაც key არის სტუდენტის სახელი ხოლო value მისი ქულა დაამატეთ 5 სტუდენტი შემდეგ გამოიყენეთ map.get და map.has რომ შეამოწმოთ კონკრეტული სტუდენტი ბოლოს map.delete ით წაშალეთ ერთი სტუდენტი და ჩაწერეთ რა დარჩა

let studentsMap = new Map (
    [
        ["Giorgi", 95],
        ["Nika", 88],
        ["Ana", 9],
        ["Luka", 85],
        ["Mariam", 90],
    ]
)

console.log(studentsMap.get("Giorgi"));

console.log(studentsMap.has("Nika")); 
console.log(studentsMap.has("Dato")); 

studentsMap.delete("Luka");

console.log(studentsMap);

//3) შექმენით mySet Set რომელიც შეიცავს გამეორებულ რიცხვებს შემდეგ გამოიყენეთ size add და delete რომ დაამატოთ ახალი ელემენტი წაშალოთ ძველი და გამოიტანოთ საბოლოო ზომა size

let myarry = [1,2,3,4,5,2,1,4,2,4,6]
let mySet = new Set(myarry)

mySet.add(12)
mySet.delete(1) 
console.log(mySet.size)

//4) შექმენით productPrices Map პროდუქტების ფასებით გამოიყენეთ for of ლუპი რომ დაბეჭდოთ თითო key და value შემდეგ map.set ით გაზარდეთ ერთ-ერთი პროდუქტის ფასი 20 პროცენტით

let productPrices = new Map(
    [
        ["Bread", 2],
        ["Milk", 3],
        ["Cheese", 8],
        ["Eggs", 5],
        ["Butter", 6],
    ]
)
for (let [product, price] of productPrices) {
    console.log(product + " : " + price);
}
let milkPrice = productPrices.get("Milk");
productPrices.set("Milk", milkPrice * 1.2);

//5) შექმენით users Map სადაც key იქნება userId ხოლო value იქნება userName დაამატეთ მინიმუმ 4 user map.keys და map.values მეთოდებით გამოიტანეთ მხოლოდ id ები და მხოლოდ სახელები საბოლოოდ map.entries გამოიყენეთ რომ ნახოთ წყვილები

let users = new Map(
    [
        [1, "Giorgi"],
        [2, "Nika"],
        [3, "Ana"],
        [4, "Luka"],
    ]
)
for (let id of users.keys()) {
    console.log(id);
}

for (let name of users.values()) {
    console.log(name);
}

for (let [id, name] of users.entries()) {
    console.log(id, name);
}

//6) შექმენით numSet Set რიცხვების სიიდან [1,2,2,3,4,4,5,6] დააბრუნეთ უნიკალური რიცხვების ჯამი for of ციკლით acc+= ელემენტი

let numSet = new Set([1,2,2,3,4,4,5,6])
let acc = 0;

for (let num of numSet) {
    acc += num;
}
console.log(acc);

//7) შექმენით promise რომელიც 2 წამში შეამოწმებს weatherIsGood ცვლადს თუ true იყოს resolve გამოიტანს ტექსტს ამინდი კარგია გასეირნება შემიძლია თუ false იყოს reject ამინდი ცუდია ვერ გავდივარ კომენტარებით ახსენით რა არის pending მდგომარეობა

let weatherIsGood = true;

let weatherPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (weatherIsGood) {
            resolve("ამინდი კარგია, გასეირნება შემიძლია");
        } else {
            reject("ამინდი ცუდია, ვერ გავდივარ");
        }
    }, 2000);
});
weatherPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));


// 8) გააკეთეთ fetch მოთხოვნა მისამართზე https://jsonplaceholder.typicode.com/posts და then ბლოკში გამოიტანეთ მხოლოდ პირველ 5 პოსტის title კომენტარებში ახსენით რა არის response.json და რატომ უნდა გამოვიყენოთ ის

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < 5; i++) {
            console.log(data[i].title);
        }
    })
    .catch(error => console.log(error));

// 9) შექმენით promise simulateLoading რომელიც setTimeout მეშვეობით 1500 მილიწამში დააბრუნებს resolve ტექსტით მონაცემები ჩაიტვირთა შემდეგ გამოიყენეთ then და catch 

let simulateLoading = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("მონაცემები ჩაიტვირთა");
    }, 1500);
});
simulateLoading
    .then(result => {
        console.log(result); 
    })
    .catch(error => {
        console.log(error);
});

// 10) გააკეთეთ fetch მომხმარებლების მისამართზე https://jsonplaceholder.typicode.com/users და then ბლოკში forEach გამოყენებით დაბეჭდეთ name და email კომენტარებში ახსენით რატომ არის fetch ასინქრონული და რატომ აბრუნებს ყოველთვის promise

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(users => {
        users.forEach(user => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => console.log("Error:", error));