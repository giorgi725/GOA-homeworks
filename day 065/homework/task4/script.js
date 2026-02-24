// 5) შექმენით ობიექტი user = {name: "Luka", level: 5, score: 190}. გამოიყენეთ for in ციკლი რომ გადაიაროთ ყველა key ამ ობიექტში და კონსოლში დაბეჭდოთ `${key}: ${user[key]}`. კომენტარებით ახსენით რისთვის გამოიყენება for in

const user = {
    name: "giorgi",
    level: 99,
    score: 999
};
for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
// for...in გამოიყენება ობიექტის property-ების (key-ების) გადასავლელად.