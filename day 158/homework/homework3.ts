// 4) შექმენით ფუნქცია, რომელიც Rest Parameter-ის გამოყენებით მიიღებს სხვადასხვა რაოდენობის String-ს და Number-ს. გამოიყენეთ შესაბამისი Type-ები Rest Parameter-ისთვის და ფუნქციის დაბრუნების Type-იც ცალსახად მიუთითეთ

function smth(...values: (string | number)[]): (string | number)[] {
    return values
}

console.log(smth("giorgi", 17, "nika", 18, "luka", 16))