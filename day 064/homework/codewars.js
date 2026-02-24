//6kyu

//https://www.codewars.com/kata/520d9c27e9940532eb00018e/train/javascript

//Duplicate Arguments

function solution(...args){
    return new Set(args).size !== args.length
}

//https://www.codewars.com/kata/528d36d7cc451cd7e4000339/train/python

//Who has the most money?

// def most_money(students):
//     if len(students) ==1:
//         return students[0].name
//     totals = []
//     for student in students:
//         total = student.fives * 5 + student.tens *10 + student.twenties * 20
//         totals.append(total)
//     if len(set(totals)) == 1:
//         return "all"
//     maxmoney = max(totals)
//     for i in range(len(students)):
//         if totals[i] == maxmoney:
//             return students[i].name

//https://www.codewars.com/kata/536e9a7973130a06eb000e9f/train/python

//Pokemon Damage Calculator

// def calculate_damage(your_type, opponent_type, attack, defense):
//     effectivness = 1
//     if your_type == opponent_type:
//         effectivness = 0.5
//     else:
//         if your_type =='fire':
//             if opponent_type =='grass':
//                 effectivness= 2
//             elif opponent_type =='water':
//                 effectivness = 0.5
//             elif opponent_type =='electric':
//                 effectivness= 1
//         elif your_type == 'water':
//             if opponent_type =='fire':
//                 effectivness= 2
//             elif opponent_type =='grass':
//                 effectivness= 0.5
//             elif opponent_type =='electric':
//                 effectivness= 0.5
//         elif your_type == 'grass':
//             if opponent_type =='water':
//                 effectivness = 2
//             elif opponent_type =='fire':
//                 effectivness=  0.5
//             elif opponent_type =='electric':
//                 effectivness = 1
//         elif your_type == 'electric':
//             if opponent_type == 'water':
//                 effectivness =2
//             elif opponent_type =='grass':
//                 effectivness= 1
//             elif opponent_type =='fire':
//                 effectivness= 1
//     return 50 * (attack / defense) * effectivness


//https://www.codewars.com/kata/5297bf69649be865e6000922/train/python

//Simple Sentences
ar
// def make_sentences(parts):
//     sent = ""
//     for part in parts:
//         if part == ",":
//             sent = sent.strip(",") + ","
//         else:
//             if sent and not sent.endswith(","):
//                 sent += " "
//             sent += part
//     sent = sent.strip(".")
//     sent = sent.strip(" ") + "."
//     return sent


//https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f/train/python

//Twisted Sum

// def compute_sum(n):
//     return sum(int(digit) for i in range(1, n + 1) for digit in str(i))

//https://www.codewars.com/kata/635fc0497dadea0030cb7936/train/python

//Same matrix (2 * 2)
ar
// def rotations(matrix):
//     a,b,c,d = matrix
//     return [
//         (a,b,c,d),
//         (c,a,d,b),
//         (d,c,b,a),
//         (b,d,a,c)
//     ]
// def norm(matrix):
//     return min(rotations(matrix))
// def count(matricies):
//     unique = set()
//     for matrix in matricies:
//         unique.add(norm(matrix))
//     return len(unique)


//5kyu
//https://www.codewars.com/kata/513e08acc600c94f01000001/train/python (RGB 1)

//RGB To Hex Conversion

// def rgb(r, g, b):
//     r = max(0, min(255, r))
//     g = max(0, min(255, g))
//     b = max(0, min(255, b))
//     return f"{r:02X}{g:02X}{b:02X}"

//https://www.codewars.com/kata/5282b48bb70058e4c4000fa7/train/python (RGB 2)

//Convert A Hex String To RGB

// def hex_string_to_RGB(hex): 
//     hex = hex.lstrip('#')
//     r = int(hex[0:2],16)
//     g = int(hex[2:4],16)
//     b = int(hex[4:6],16)
//     return {'r': r,'g': g,'b': b}

//https://www.codewars.com/kata/550f22f4d758534c1100025a/train/python

//Directions Reduction

// def dir_reduc(arr):
//         stack = []
//         opposites = {"NORTH":"SOUTH", "SOUTH":"NORTH", "WEST":"EAST", "EAST":"WEST"}
//         for direction in arr:
//             if stack and stack[-1] == opposites[direction]:
//                 stack.pop()
//             else:
//                 stack.append(direction)
//         return stack

//https://www.codewars.com/kata/52ebe4608567ade7d700044a/train/python

//Poker cards encoder/decoder

// def encode(cards):
//     ranks = {"c": 0, "d": 1, "h": 2, "s":3}
//     suits = {"A":0, "2":1,"3":2,"4":3,"5":4,"6":5,"7":6,"8":7,"9":8,"T":9,"J":10,"Q":11,"K":12}
//     codes = []
//     for card in cards:
//         rank, suit = card[0], card[1]
//         code = suits[suit]*13 + ranks[rank]
//         codes.append(code)
//     return sorted(codes)

// def decode(cards):
//     suits = ["A","2","3","4","5","6","7","8","9","T","J","Q","K"]
//     ranks = ["c","d","h","s"]
//     res = []
//     for code in sorted(cards):
//         suit = suits[code // 13]
//         rank = ranks[code % 13]
//         res.append(rank + suit)
//     return res
