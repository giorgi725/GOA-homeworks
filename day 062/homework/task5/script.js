// 6) შექმენით თარიღის ობიექტი, რომელშიც შეინახავთ 2024 წლის დეკემბრის 25 რიცხვს. ობიექტის შექმნისას გამოიყენეთ new Date(year, month, day) ფორმატი. კომენტარებით ახსენით რით განსხვავდება ეს ფორმა string-ის გადაცემისგან, შექმნილი ობიექტიდან ცალცალკე გამოიტანეთ წელი, თვე, და დღე კონსოლში, ასევე აჩვენეთ რა შედეგს დააბრუნებს getDay() ფუნქცია ამ თარიღისთვის


let date = new Date(2024-11-25)

let day = date.getDay() //25
let month = date.setMonth() //11
let year = date.getFullYear() //2024

console.log(day)
console.log(month)
console.log(year)

console.log(date.getDay()) //4 ხუთშაბათია 