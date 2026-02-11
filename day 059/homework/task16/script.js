// 17) შექმენით ორი Date ობიექტი:
// ერთი დღევანდელი თარიღი
// მეორე ნებისმიერი წარსული თარიღი
// დაითვალეთ რამდენი დღეა გასული ამ ორ თარიღს შორის.
// გამოიყენეთ getTime და მათემატიკური ოპერაციები

const currentDate = new Date()
const anyDate = new Date(1999-2-12)

let todayMs = currentDate.getTime();
let pastMs = anyDate.getTime();

let days = todayMs - pastMs;

let answer = Math.floor(days / (1000 * 60 * 60 * 24));

console.log("Days passed:", answer);