// // set it shegvidzlia kutvnileba shevcvalot

// //private # 
// //_protected
// class Human {
//     constructor(username) {
//         this.username = username
//     }
//     heal () {
//         console.log("first")
//     }
// }

// class Doctor extends Human{
//     constructor(username, rank) {
//         //superit shegvidzlia winapari klasidan cutvnilebebs wamoigeba
//         super(username)
//         this.rank = rank
//     }
//     heal () {
//         console.log(`${this.username} is currently busy`)
//     }
// }
// let pers1 = new Human("john")
// pers1.heal()
// let house = new Doctor("Dr.house", "Medical director")
// house.heal()

// //set -დაულაგებელი და არ შეიძლება დუბლიკატი

// let myarry = [1,2,3,4,5]
// let mySet = new Set(myarry)

// mySet.add(12) // emateba 12 (boloshi)
// mySet.delete(1) // waishleba 1 
// mySet.has(2) // tu sheicavs ricxvs true gamoaq tu ara sheicavs false
// mySet.clear() // asuftavebs\
// console.log(mySet.size) // sigrdze gamoaq

// // map 
// const mymap = new Map(
//     [
//         ["username", "jumber"]
//         ["gio", 3]
//         [true, 5]
//         [4,"vano"]
//         ["hahah", true]
//     ]
// )
// console.log(mymap.get(username))// jumber

// mymap.set("key", "value")
// mymap.delete(gio) 
// console.log(mymap.has("dsjs")) // false
// mymap.set({hello: "world"}, 5)


// const a = () => {console.log("a")}
// const b = () => {console.log("b")}
// const test = new Map(
//     [
//         [a, 21],
//         [b, 32]
//     ]
// )
// console.log(test.get(a))
// console.log(test.get(b))



// promise
// pending - lodini
// fulfiled - warmatebit
// rejected - dauareba
// const promise = new Promise((resolve, reject) => {
//     let mynumber = 10
//     setTimeout(() => {}, 4000);
//     if (mynumber === 10) {
//         resolve("Promise fulfiled")
//     } else {
//         reject("failed")
//     }
// })

// promise.then((res) => {console.log(res)})


// fetch, json
//json - javascript object notation

let main = document.querySelector("main")
let input = document.querySelector("input")
let btn = document.querySelector("button")

btn.addEventListener("click", fetchinfo)

function randerinfo(info) {
    console.log(info)

    // main.innerHTML +=  `
    // <div>
    //     <h2>${info.name}<h2>
    //     <img src="${info.avatar_url}"/>
    //     <p>Bio: ${info.bio}</p>
    //     <p>follwers: ${info.followers}</p>
    // </div>`
    main.innerHTML =  `
    <div>
        <h2>${info.name}<h2>
        <img src="${info.avatar_url}"/>
        <p>Bio: ${info.bio}</p>
        <p>followers: ${info.followers}</p>
        <p>following: ${info.following}</p>
    </div>`
}
function fetchinfo () {
    let username = input.value
    let promise = fetch(`https://api.github.com/users/${username}`)
    promise
        .then(response => response.json())
        .then(data => randerinfo(data))
}