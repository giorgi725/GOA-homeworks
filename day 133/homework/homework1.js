// 1) შექმენი ფუნქცია average(numbers), რომელიც მიიღებს რიცხვების მასივს და დააბრუნებს მათ საშუალოს. average([10, 20, 30]) ==> 20

function average(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum / numbers.length
}

average()

// 2) შექმენი ფუნქცია censorship(sentence)  ფუნქციამ უნდა მიიღოს წინადადება (sentence) და ჩაანაცვლოს ყველა აკრძალული სიტყვა ("idiot", "stupid", "dumb") სიმბოლოებით "*".

function censorship(sentence) {
    const bannedWords = ["idiot", "stupid", "dumb"];
    for (let word of bannedWords) {
        sentence = sentence.replaceAll(word, "*".repeat(word.length))
    }
    return sentence
}

censorship()

//  3) შექმენი ფუნქცია removeSpaces(text), რომელიც ტექსტიდან ყველა გამოტოვებას (space) წაშლის.

function removeSpaces(text) {
    return text.replaceAll(" ", "")
}

removeSpaces()


// codewars

// 4) https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// Find the unique number

function findUniq(arr) {
    arr.sort((a, b) => a - b)
    return arr[0] === arr[1] ? arr[arr.length - 1]: arr[0]}

//  5) https://www.codewars.com/kata/578aa45ee9fd15ff4600090d

// Sort the odd

function sortArray(array) {
    const odds = array.filter(num => num % 2 !== 0).sort((a, b) => a - b)
    return array.map(num => num % 2 !== 0 ? odds.shift() : num)
}

// 6) https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

// Duplicate Encoder

function duplicateEncode(word) {
    word = word.toLowerCase()
    return word.split("").map(char => word.indexOf(char) === word.lastIndexOf(char) ? "(": ")").join("")
}