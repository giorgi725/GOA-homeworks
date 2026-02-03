let number = Number(prompt());
if (number > 0){
    alert("number is positive")
} else {
    alert("number is negative")
}

let score= Number(prompt());

if (score > 90) {
    alert("A")
} else if (score > 70){
    alert ("B")
} else if (score > 50){
    alert("C")
} else if (score > 30){
    alert("D")
} else if (score > 10){
    alert("E")
} else {
    alert ("you failed")
}

let a = 10
while (a > 0){
    console.log(a);
    a--;
}

for (let i = 0; i < 10; i++) {
    console.log(i)
}