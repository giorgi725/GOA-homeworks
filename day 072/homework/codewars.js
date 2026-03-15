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


//https://www.codewars.com/kata/59f70440bee845599c000085/train/python

//Find Cracker.


//https://www.codewars.com/kata/5d98b6b38b0f6c001a461198/train/python

//Binaries




//https://www.codewars.com/kata/525caa5c1bf619d28c000335/train/javascript (Tic Tac Toe)

//Tic-Tac-Toe Checker



//https://www.codewars.com/kata/517b2bcf8557c200b8000015/train/python

//Ninja vs Samurai: Attack + Block

