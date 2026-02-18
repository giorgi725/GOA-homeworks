// 9) შექმენით მაგალითი, სადაც setTimeout გამოიძახებს ფუნქციას 1 წამში და კონსოლში გამოიტანს ტექსტს "1 second passed". კომენტარებით ახსენით განსხვავება setTimeout და setInterval ფუნქციებს შორის

// setTimeout:
setTimeout(function() {
    console.log("1 second passed");
}, 1000);

// განსხვავება setTimeout და setInterval-ს შორის

// setTimeout:
// ფუნქცია შესრულდება მხოლოდ ერთხელ, delay-ის დასრულების შემდეგ

// setInterval:
// ფუნქცია განმეორდება ყოველ delay დროში, სანამ არ მოხდება clearInterval
// გამოიყენება ანიმაციებსა და პერიოდულ ტასკებში