function f(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++){
        let newElement = arr[i - 1] + arr[i - 2]
        arr.push(newElement)
    }
    return arr
}
console.log(f(5))

let username2 = "giorgi" 

console.log(username.charAt(0))
console.log(username.split(''))
console.log(username.endsWith("a"))


let username = "1235432" 
let result = []
username = username.split('')
for (let i =username.length - 1; i >= 0; i--) {
    username.push(Number(username[i]))
}
console.log(result)
