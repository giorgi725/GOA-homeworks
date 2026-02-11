// 5) შექმენით ფუნქცია სახელად manualIndexOf რომელსაც გადაეცემა მნიშნელობა და სია, თქვენი დავალებაა ფუნქციიდან დააბრუნოთ ნაპოვნი მნბიშნელობის ინდექსი, თუ გადმოცემული მნიშნელობა სიაში არ მოიძებნა დააბრუნეთ -1

function manualIndexOf(value, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(manualIndexOf("banana", ["apple", "banana", "orange"])); 
console.log(manualIndexOf(20, [10, 20, 30, 40])); 