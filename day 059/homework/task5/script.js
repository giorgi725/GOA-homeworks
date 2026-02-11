// 6) შექმენით ფუნქცია სახელად manualReverse რომესლაც გადმოეცემა სია, და უნდა დააბრუნოთ შემოტრიალებული ვერსია სიის

function manualReverse(arr) {
    let reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log(manualReverse([1, 2, 3, 4, 5]));