// 3) შექმენით სხვადასხვა ტიპის მნიშვნელობების Array-ები TypeScript-ში. გამოიყენეთ Union Type, რათა შექმნათ Array, რომელიც ერთდროულად String-სა და Number-ს მიიღებს. შექმენით ასევე მხოლოდ String-ების და მხოლოდ Number-ების Array-ები

let names: string[] = ["giorgi", "nika", "luka"]

let ages: number[] = [17, 18, 16]

let mixedArray: (string | number)[] = ["giorgi", 17, "nika", 18, "luka", 16]
