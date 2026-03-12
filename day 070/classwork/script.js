// // map filter foreach reduce

// // iterable - მონაცემთა ტიპი რომელსაც შეგიძლია ციკლით გადაუარო

// //iterable.map(func)
// // ყველა iterable ელემენტზე გამოიძახებს  ფუნქციას მიერ დაბრუნებულ შედეგებს შეინახავს ახალ სიაში
// // არ ცვლის შედეგს

// //map
// let myArr = [12,3,31,6,8,78,76]

// function square(element) {
//     return Math.pow(element)
// }

// let newArr = myArr.map(square)

// let newArr1 = myArr.map(element => {return element ** 2})

// //filter - ფილტრავს თუ პირობა true მაგ შემთხვევაში ამატებს თუ false წაშლის

// let arr = [32,3,54,456,767,8,432]

// function iseven (num){
//     return num % 2 == 0
// }
// let filter = arr.filter(iseven)
// let filter2 = arr.filter(num => num % 2 == 0)
// console.log(filter)

// //forEach 
// let foreacharr = [23,7,54,4,3,32,31]

// function triple(num) {
//     return num * 3
// }
// let res2 = foreacharr.forEach(triple)
// let res = foreacharr.forEach(num => num * 2)
// console.log(res)

// reduce

// let reducearr = [12,343,5,77,98,23,12]

// function addall(acc, element) {
//     return acc += element
// }
// let total = reducearr.reduce(addall)
// console.log(total)
// let total3 = reducearr.reduce((prevValue, currentValue) => {return prevValue += currentValue})
// console.log(total3)

// function manualmap(iterable, callback) {
//     let res = []
//     for (let item of iterable){
//         res.push(callback(item))
//     }
//     return res
// }

// function manualfilter(iterable,callback) {
//     let res = []
//     for (let item of iterable) {
//         if (callback(item)){
//             res.push(item)
//         }
//     }
//     return res
// }


// import Account, {getfullname as fullname,getemail} from "./user.js";

// let user1 = new Account("gio", "megreli", "dasjdjwq@ds", "1234")

// console.log((fullname(user1)))
// console.log((getemail(user1)))

//sync vs async

// async function getdata() {
//     let response = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//         resolve("dasa")
//     })}, 2000)
//     // const data = await response.json()
//     console.log(response)
// }
// getdata()
// console.log("hello world")

async function getdata() {
    try {
        const response = await fetch("some link")
        const data = await response.json()
        data.map((object) => {
            document.body.innerHTML += `
            <h2>${object.title}</h2>`
        })
    } catch (error) {
        console.log(`error: ${error}`)
    }
}
getdata()

//try/catch
try {
    null.username //some error
} catch(error) { // error ებს იჭერს და ჭერში აწყობს
    console.log(`error: ${error}`)
}