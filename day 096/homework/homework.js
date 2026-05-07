// 6 kyu

// https://www.codewars.com/kata/52532cc8e9ea83b89b000008/train/javascript

// Hard Time Bomb

for (let key in globalThis) {
    if (typeof globalThis[key] === "number") {
        Bomb.CutTheWire(globalThis[key]);
    }
}

// https://www.codewars.com/kata/525a3d6b85a9a47fcf00055a/train/javascript

// Calculate Hypotenuse of Right-angled Triangle

function calculateHypotenuse(a, b) {
    if (
        typeof a !== "number" || Number.isNaN(a) || a <= 0 ||
        typeof b !== "number" || Number.isNaN(b) || b <= 0
    ) {
        throw new Error("Invalid input");
    }
    let result = Math.sqrt(a * a + b * b);
    return Number(result.toFixed(3));
}

// https://www.codewars.com/kata/53046ceefe87e4905e00072a/train/javascript

//Palindrome for your Dome



// https://www.codewars.com/kata/541b5694204d12573700101c/train/javascript

// Combinator Flip

function flip(fn) {
    return (...args) => {
        let reversed = [];

        for (let i = args.length - 1; i >= 0; i--) {
        reversed.push(args[i]);
        }
        return fn(...reversed)
    }
}

// https://www.codewars.com/kata/558ccca75f511f2b0d0000f7/train/javascript

// Javascript from the Inside #1 : Map

Array.prototype.map = function(callback, context) {
    let res = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
        res[i] = callback.call(context, this[i], i, this);
        }
    }
    return res
};

// 5 kyu

//https://www.codewars.com/kata/513e08acc600c94f01000001/train/python

//RGB To Hex Conversion

// def rgb(r, g, b):
//     r = max(0, min(255, r))
//     g = max(0, min(255, g))
//     b = max(0, min(255, b))
//     return f"{r:02X}{g:02X}{b:02X}"

//https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/python

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

//https://www.codewars.com/kata/52ebe4608567ade7d700044a/train/python

//



//https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/python

//Poker cards encoder/decoder

// def encode(cards):
//     suits = {"c": 0, "d": 1, "h": 2, "s":3}
//     ranks= {"A":0, "2":1,"3":2,"4":3,"5":4,"6":5,"7":6,"8":7,"9":8,"T":9,"J":10,"Q":11,"K":12}
    
//     codes = []
//     for card in cards:
//         rank, suit = card[0], card[1]
//         code = suits[suit]*13 + ranks[rank]
//         codes.append(code)
//     return sorted(codes)

// def decode(cards):
//     ranks = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]
//     suits = ["c","d","h","s"]
    
//     res = []
//     for code in sorted(cards):
//         suit = suits[code // 13]
//         rank = ranks[code % 13]
//         res.append(rank + suit)
//     return res

//https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/python

//



//https://www.codewars.com/kata/515bb423de843ea99400000a/train/python

//

