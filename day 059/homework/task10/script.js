// 11) შექმენით ფუნქცია სახელად randomInRange, რომელსაც გადაეცემა ორი რიცხვი (min და max). ფუნქციამ უნდა დააბრუნოს შემთხვევითი მთელი რიცხვი ამ დიაპაზონში (min და max ჩათვლით). გამოიყენეთ Math.random და Math.floor

function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomInRange(1, 10));