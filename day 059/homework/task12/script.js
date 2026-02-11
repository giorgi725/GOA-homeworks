// 13) შექმენით ფუნქცია სახელად roundToTwo, რომელსაც გადაეცემა ათწილადი რიცხვი და აბრუნებს ამ რიცხვს ორ ათწილადამდე დამრგვალებულს

function roundToTwo() {
    return Math.round(num * 100) / 100
}
console.log(roundToTwo(3.14159));