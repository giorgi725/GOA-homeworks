// 1) შექმენით ფუნქცია reverse(num) რომელსაც გადაეცემა რიცხვი და დააბრუნებს ამ რიცვის საპირისპირო მნიშვნელობას . 
// მაგ:
//   reverse(10) ==> -10
//   reverse(-10) ===> 10 

function reverse(num) {
    return -num;
}
reverse(10)


// 2)
// function getTicketPrice(age) {
//   if (age < 18) {
//     return 20 * 0.5;
//   } else {
//     return 20;
//   }
// }
// გადააქციეთ შემდეგი ფუნქცია arrow ფუნქციად 

const getTicketPrice = age => age < 18 ? 20 * 0.5 : 20



// codewars

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript/6995e92a6125737838b2a625

// Vowel Count

const getCount = str => [...str].filter(char => "aeiou".includes(char)).length


// https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript/6999cd662ea9a484f498af2c

// Square(n) Sum

const squareSum = numbers => numbers.reduce((sum, num) => sum + num ** 2, 0);

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/typescript/6999cdcd079f8b4f17050a5c

// Find the smallest integer in the array

const findSmallestInt = arr => Math.min(...arr);