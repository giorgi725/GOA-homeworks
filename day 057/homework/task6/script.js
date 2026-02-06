// 12) შექმენით for ციკლი რომელიც გამოთვლის ყველა რიცხვის ჯამს 1-იდან 100-მდე და დაბეჭდავს შედეგს

let sum = 0
for (let i = 2; i < 100; i++) {
    sum += i
}
console.log(sum)

// 13) შექმენით if-else სტრუქტურა, რომელიც შეამოწმებს მოცემული რიცხვი ლუწია თუ კენტი
let num = prompt("enter any number:");
num = Number(num)

if (num % 2 === 0){
    return "its even"
} else {
    return "its odd"
}


// 14) შექმენით ფუნქცია სახელად isPrime, რომელიც ამოწმებს გადაცემული რიცხვი მარტივია თუ არა და აბრუნებს true ან false

function isPrime() {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log(isPrime(10));

// 15) შექმენით ფუნქცია სახელად multiplyArray, რომელიც მიიღებს მასივს და ყველა ელემენტს გაამრავლებს 2-ზე, საბოლოოდ დააბრუნებს ახალ მასივს

function multiplyArray(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
let numbers = [1, 2, 3, 4, 5];
let result = multiplyArray(numbers);
console.log(result);

// 16) შექმენით for ციკლი რომელიც მასივში მოძებნის ყველაზე დიდ რიცხვს და დაბეჭდავს მას

let number = [32,423,12,43,35,52];
let maxNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
    }
}
console.log(maxNumber);

// 17) შექმენით while ციკლი რომელიც 10-იდან 0-მდე დაითვლის და ბოლოს დაბეჭდავს "Countdown complete!"

let count = 10;
while (count >= 0) {
    console.log(count);
    count--;
}
console.log("Countdown complete!");


// 18) შექმენით if-else სტრუქტურა, რომელიც შეამოწმებს რიცხვი იყოფა თუ არა 3-ზე, 5-ზე ან ორივეზე (FizzBuzz ლოგიკა)

let nums = Number(prompt("enter number:"));

if (nums % 3 === 0 && nums % 5 === 0) {
    console.log("FizzBuzz");
} else if (nums % 3 === 0) {
    console.log("Fizz");
} else if (nums % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(nums);
}

// 19) შექმენით ფუნქცია რომელიც მიიღებს მასივს და დაითვლის რამდენი ლუწი რიცხვია მასში

function countEvenNumbers(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
let numc = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(countEvenNumbers(numbers));

// 20) შექმენით for ციკლი რომელიც სტრიქონის ყველა სიმბოლოს ცალ-ცალკე დაბეჭდავს კონსოლში

let word = "hello world"
for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}

// 21) შექმენით პატარა რეალური ამოცანა — მომხმარებელი შეყვანს პაროლს, და while ციკლი იმუშავებს სანამ პაროლი სწორად არ იქნება შეყვანილი (მაგ: “1234”)

let correctPassword = "1234";
let userInput = "";
while (userInput !== correctPassword) {
    userInput = prompt("enter password:");
}
alert("password is correct");