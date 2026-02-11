// 16) შექმენით ფუნქცია სახელად isWeekend, რომელსაც გადაეცემა Date ობიექტი. ფუნქციამ უნდა დააბრუნოს true თუ თარიღი არის შაბათი ან კვირა, წინააღმდეგ შემთხვევაში false

function isWeekend(date) {
    const day = date.getDay();

    return day === 0 || day === 6;
}

let d1 = new Date(2026, 1, 8); // 8 თებერვალი 2026 → შაბათი
let d2 = new Date(2026, 1, 10); // 10 თებერვალი 2026 → სამშაბათი

console.log(isWeekend(d1)); // true
console.log(isWeekend(d2)); // false