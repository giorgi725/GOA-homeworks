//15) შექმნილი ობიექტიდან ცალ-ცალკე გამოიტანეთ: წელი (getFullYear) თვე (getMonth)დღე (getDate) კვირის დღე (getDay) კომენტარებით ახსენით თითოეული მეთოდის დაბრუნებული მნიშვნელობა

let myBirthday = new Date(2000, 4, 15); // 15 მაისი 2000

console.log("Year:", myBirthday.getFullYear()); // 2000

console.log("Month:", myBirthday.getMonth()); // 4

console.log("Day:", myBirthday.getDate()); // 15

console.log("Week Day:", myBirthday.getDay()); // 1 = Monday