// function smth() {
//     smth()
// }
// smth()

// // memory leak - იწვევს პროგრამის შენელაბას. Ram ის გავსება და სხვა

// const num = [12,3,2,35,44,32,2,1]

// console.log(num.length) 
// console.log(num.toString) 
// console.log(num.at(2)) 
// console.log(num.join("$")) 
// console.log(num.shift()) 
// console.log(num.unshift(21)) 
// const num1 = [23,32,21,34,32]
// console.log(num1.slice(0,3))
// const num2 = [21,323,124,12,403,42,43] 
// console.log(num2.splice(0,3)) 
// console.log(num.indexOf(3)) 
// console.log(num.includes(12))
// console.log(num.reverse())  
// console.log(num.toSorted()) 
// console.log(num.sort()) 


// // math object

// console.log(Math.floor(5.8)) // floor  ათწილადებს აჭრის 5ს გამოიტანს
// console.log(Math.random()) //random
// console.log(Math.abs(-4)) 
// console.log(Math.ceil(5.8)) // zevit daamrgvalebs
// console.log(Math.round(5.4)) // 5s gamoitans
// console.log(Math.min(2,3,4,2,1)) // minimum - 1
// console.log(Math.max(12,3,34,23)) // maximum - 34
// console.log(Math.max(...[12,3,34,23]))
// console.log(Math.PI())
// console.log(Math.pow(2, 4)) //xarisxshi ayvana
// console.log(Math.trunc(3.1))
// console.log(Math.sign(-4)) // tu dadebitia 1 gamoaq tuara -1
// console.log(Math.sqrt(16)) //kvadratuli fesvi 4
// console.log(Math.log(4,2))


// //date object
// const currentDate = new Date('2021-8-25')

// console.log(currentDate.getHours()) // 0 saati gamoaq
// console.log(currentDate.getMinutes()) // 0 wuti gamoaq
// console.log(currentDate.getDay()) // 3 gamoaq dge "otxshabati"
// console.log(currentDate.getFullYear()) // 2021 gamoaq weli
// console.log(currentDate.getMonth())  // meshvide tvea
// console.log(currentDate.getSeconds()) // 0 wami
// console.log(currentDate.getDate()) // 25 date

// const currentDate1 = new Date(2026,2,9) //მეორე სახით ჩაწერა
// // UTC - არის მსოფლიო საერთაშორისო დრო "მგონი"

const taskfield = document.getElementById("input")
const btn = document.getElementById("send")
const tasksUI = document.getElementById("tasks")

btn.onclick = function() {
    const task = taskfield.value

    const newli = document.createElement("li")
    newli.textContent = task

    tasksUI = this.appendChild(newli)
}