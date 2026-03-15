//https://www.codewars.com/kata/5b817c2a0ce070ace8002be0/train/python (Tic Tac Toe) N1

//Tic-Tac-Toe-like table Generator

// def display_board(board, width):
//     rows = []
//     for i in range(0, len(board), width):
//         row = board[i:i+width]
//         rows.append(" " + " | ".join(row) + " ")
//     separator = "-" * (width * 4 - 1)
//     return ("\n" + separator + "\n").join(rows)

//https://www.codewars.com/kata/590adadea658017d90000039/train/javascript

//Fruit Machine

function fruit(reels, spins){
    const scores = {
    Wild: 100,
    Star: 90,
    Bell: 80,
    Shell: 70,
    Seven: 60,
    Cherry: 50,
    Bar: 40,
    King: 30,
    Queen: 20,
    Jack: 10
    };
    const values = [
    reels[0][spins[0]],
    reels[1][spins[1]],
    reels[2][spins[2]]
    ];
    if (values[0] === values[1] && values[1] === values[2]) {
        return scores[values[0]];
    }
    for (let item of new Set(values)) {
        if (values.filter(v => v === item).length === 2) {
        if (values.includes("Wild")) {
            return (scores[item] / 10) * 2;
        }
        return scores[item] / 10;
        }
    }
    return 0;
}

//https://www.codewars.com/kata/5469e0798a3502f4a90005c9/train/python

//Rotate Array

// def rotate(data, n):
//     if len(data) == 0 or n == 0:
//         return data
//     n = n % len(data)
//     right_part = data[len(data) - n:]
//     left_part = data[:len(data) - n]
//     return right_part + left_part

//https://www.codewars.com/kata/59f70440bee845599c000085/train/python

//Find Cracker.

// def find_hack(arr):
//     result = []
//     for name, total, grades in arr:
//         count = 0
//         for g in grades:
//             if g == "A":
//                 count += 30
//             elif g == "B":
//                 count += 20
//             elif g == "C":
//                 count += 10
//             elif g == "D":
//                 count += 5
//         if len(grades) >= 5 and all(g in ["A","B"] for g in grades):
//             count += 20
//         count = min(count, 200)
//         if total != count:
//             result.append(name)
//     return result

//https://www.codewars.com/kata/5d98b6b38b0f6c001a461198/train/python

//Binaries




//https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript (Tic Tac Toe)

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

//https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/python

//Ninja vs Samurai: Attack + Block

// Position = {'high': 'h', 'low': 'l'}  # don't change this!
// class Warrior:
//     def __init__(self, name):
//         self.name = name
//         self.health = 100
//         self.block = ""       
//         self.deceased = False
//         self.zombie = False
//     def attack(self, enemy, position):
//         damage = 0
//         if enemy.block != position:
//             damage += 10 if position == Position['high'] else 5
//         if enemy.block == "":
//             damage += 5
//         enemy.set_health(enemy.health - damage)
//     def set_health(self, new_health):
//         self.health = max(0, new_health) 
//         if self.health == 0:
//             if self.deceased:
//                 self.zombie = True 
//             else:
//                 self.deceased = True
//                 self.zombie = False