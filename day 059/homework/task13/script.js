// 14) შექმენით Date ობიექტი, რომელიც შეინახავს თქვენს დაბადების თარიღს (year, month, day ფორმატით). კომენტარებით ახსენით რატომ იწყება თვეები 0-იდან

let myBirthday = new Date(2022, 4, 15);

console.log("Year:", myBirthday.getFullYear()); // 2022
console.log("Month:", myBirthday.getMonth()); // 4 მაისი, რადგან 0 = იანვარი
console.log("Day:", myBirthday.getDate()); // 15

console.log("Week Day:", myBirthday.getDay());