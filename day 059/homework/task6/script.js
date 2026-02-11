// 7) შექმენით ფუნქცია სახელად manualSlice რომელსაც გადაეცემა პირველი მასივი და ორი რიცხვი საწყისის ინდექსი და დასასრულის ინდექსი, თქვენი დავალებაა გადმოცემული ინდექსიდან მეორე ინდექსამდე ჩამოაჭრათ სიას ნაწილიდა დააბრუნოთ ფუნქციიდან გამოიყენეთ for ციკლი

function manualSlice(arr, start, end) {
    let result = [];

    for (let i = start; i < end; i++) {
        result.push(arr[i]);
    }
    return result;
}
console.log(manualSlice([1, 2, 3, 4, 5], 1, 4));