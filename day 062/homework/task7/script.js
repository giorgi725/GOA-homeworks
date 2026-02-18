// 8) შექმენით countdown ტაიმერი, სადაც ცვლადი time = 10 დაიკლებს ყოველ წამში ერთით. როდესაც მნიშვნელობა გახდება 0, უნდა გაჩერდეს ინტერვალი clearInterval ფუნქციით და კონსოლში გამოიტანოს ტექსტი "Time up". კომენტარებით დაწერეთ რას აკეთებს clearInterval4

let time = 10;

const intervalId = setInterval(function() {
    console.log("Time remaining:", time);
    time--;
    if (time < 0) {
        clearInterval(intervalId);
        console.log("Time up");
    }
}, 1000);