//8 kyu
//https://www.codewars.com/kata/551b4501ac0447318f0009cd/train/javascript

//Convert a Boolean to a String

function booleanToString(b){
    let smth = b.toString();
    return smth
}

//https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript

//Convert number to reversed array of digits

function digitize(n) {
    let str = n.toString();
    let result = [];
    for (let i = str.length - 1; i >= 0; i--) {
        result.push(Number(str[i]))
    }
    return result
}

//https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript

//Grasshopper - Grade book

function getGrade (s1, s2, s3) {
    let score = (s1 + s2 + s3) / 3
    if (90<=score && score<=100) {
        return "A"
    } else if (80<=score && score<=90) {
        return "B"
    } else if (70<=score && score<=80) {
        return "C"
    } else if (60<=score && score<=70) {
        return "D"
    } else {
        return "F"
    }
}

//https://www.codewars.com/kata/5ab6538b379d20ad880000ab/train/javascript

//Area or Perimeter

const areaOrPerimeter = function(l , w) {
    if (l == w) {
        return l * w 
    } else {
        return 2 * (l + w)
    }
};

///7 kyu
//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

//Complementary DNA

function dnaStrand(dna){
    let res = ""
    for (let char of dna)
    if (char === "A") {
        res += "T"
    } else if (char === "T") {
        res += "A"
    } else if (char == "C") {
        res += "G"
    } else if (char === "G") {
        res += "C"
    }
    return res
}

//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

//Reverse words

function reverseWords(str) {
    let result = ""
    let word = ""
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
        word += str[i]
        } else {
        result += word.split("").reverse().join("")  + str[i];
        word = ""
        }
    }
    result += word.split("").reverse().join("");
    return result
}

//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

//Square Every Digit

function squareDigits(num){
    let res = ""
    
    num = String(num)
    for (let digit of num) {
        res += String(Number(digit) ** 2)
    }
    return Number(res)
}

//https://www.codewars.com/kata/5390bac347d09b7da40006f6/train/javascript

//Jaden Casing Strings

/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/
Object.defineProperty(
    String.prototype,
    'toJadenCase',
    { value :
    function toJadenCase() {
        let words = this.split(" ")
        let res = []
        
        for (let i = 0; i < words.length; i++) {
            let word = words[i]
            let capitalized = word[0].toUpperCase() + word.slice(1)
            res.push(capitalized)
        }
        return res.join(" ")
    }
    }
);