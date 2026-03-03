//6 kyu
//https://www.codewars.com/kata/52fba2a9adcd10b34300094c/train/javascript

//Matrix Transpose

function transpose(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    const result = [];
    for (let i = 0; i < cols; i++) {
        result[i] = [];
        for (let j = 0; j < rows; j++) {
        result[i][j] = matrix[j][i];
        }
    }
    return result;
}

//https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

//Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!

function sumDigPow(a, b) {
    const result = [];
    for (let num = a; num <= b; num++) {
        let sum = 0;
        let str = num.toString();
        for (let i = 0; i < str.length; i++) {
        let digit = Number(str[i]);
        sum += digit ** (i + 1);  
        }
        if (sum === num) {
        result.push(num);
        }
    }
    return result;
}

//https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

//Write Number in Expanded Form

function expandedForm(num) {
    const str = num.toString();
    const result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== "0") {
        const zeros = str.length - i - 1;
        result.push(str[i] + "0".repeat(zeros));
        }
    }
    return result.join(" + ");
}

//https://www.codewars.com/kata/51e704f2d8dbace389000279/train/javascript

//Arrays Similar

function arraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    const sorted1 = [...arr1].sort();
    const sorted2 = [...arr2].sort();
    for (let i = 0; i < sorted1.length; i++) {
        if (sorted1[i] !== sorted2[i]) {
        return false;
        }
    }
    return true;
}

//https://www.codewars.com/kata/54129112fb7c188740000162/train/javascript

//Prefill an Array

function prefill(n, v) {
    if (n === 0) {
        return []
    }
    if (
        (typeof n === "number" && Number.isInteger(n) && n >= 0) ||
        (typeof n === "string" && /^\d+$/.test(n))
    ) {
        return Array(Number(n)).fill(v);
    }
    throw new TypeError(`${n} is invalid`);
}

//https://www.codewars.com/kata/586a933fc66d187b6e00031a/train/javascript

//Image host filename generator

function generateName(){
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 6;
    function randomString() {
        let str = '';
        for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return str;
    }
    let filename = randomString();
    while (photoManager.nameExists(filename)) {
        filename = randomString();
    }
    return filename;
}

//5kyu

//https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript

//Tic-Tac-Toe Checker

function isSolved(board) {
    const checkLine = (a, b, c) => {
        if (a === b && b === c && a !== 0) {
        return a;
        } else {
        return 0;
        }
    };
    for (let i = 0; i < 3; i++) {
        const result = checkLine(board[i][0], board[i][1], board[i][2]);
        if (result) {
        return result;
        }
    }
    for (let i = 0; i < 3; i++) {
        const result = checkLine(board[0][i], board[1][i], board[2][i]);
        if (result) {
        return result;
        }
    }
    let result = checkLine(board[0][0], board[1][1], board[2][2]);
    if (result) {
        return result;
    }
    result = checkLine(board[0][2], board[1][1], board[2][0]);
    if (result) {
        return result
    };
    for (let row of board) {
        if (row.includes(0)) {
        return -1;
        }
    }
    return 0;
}

//https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

//Simple Pig Latin

function pigIt(str){
    let split = str.split(" ")
    const result = [];

    for (let i = 0; i < split.length; i++) {
        const word = split[i];
        const firstChar = word[0];
        if ((firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z')){
        result.push(word.slice(1) + word[0] + "ay")
        } else {
        result.push(word);
        }
    }
    return result.join(' ');
}
//https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

//Beeramid

function beeramid(bonus, price) {
    let level = 0;      
    let cansUsed = 0;   
    let totalCans = Math.floor(bonus / price);

    while (true) {
        let cansNeeded = (level + 1) ** 2;
        if (cansUsed + cansNeeded <= totalCans) {
        level++;        
        cansUsed += cansNeeded;
        } else {
        break;            
        }
    }
    return level;
}

//https://www.codewars.com/kata/51edd51599a189fe7f000015/train/javascript

//Mean Square Error

const solution = function(firstArray, secondArray) {
    let sum = 0;
    for (let i = 0; i < firstArray.length; i++) {
        const diff = firstArray[i] - secondArray[i]; 
        sum += diff * diff;            
    }
    return sum / firstArray.length;
}