// scope - lexical scope,shadowing 

// lexical scope - გარეთ არაა ხელმისაწვდომი
// function greet() {
//     let y = 10
//     confirm.log(y)
// }
// greet()

// let x = 10

// shadowing
// function outer() {
//     let username = "gio"

//     function inner() {
//         let username = "GIO"
//         console.log(username) //GIO
//     } 
//     console.log(username) // gio
//     inner()
// } 
// outer()

// function outer() {
//     let username = "luka"

//     function inner() {
//         for (let i = 0; i < 10; i++) {
//             username = username.toLowerCase()
//         }
//     } 
//     inner()
//     console.log(username)
// } 
// outer()
// global - ცვლადი ხელმისაწვდომია ყველგან კოდში
// local - ხელმისაწვდომია მხოლოდ ადგილობრივ კოდში

// ცვლადების შექმნა შეგვიძლია სამი გზით - let, const, var
// let - ში შეცვლა შეგვიძლია მნიშვნელობის
// const - არ შეგვიძლია მნიშვნელობის შეცვლა 




// declaration - 

// initlization - 

// while (password != "gio12345") {
//     var password = promt("enter a password")
// }


// hoisting - javascript ის თვისება რომლის მიხედვითაც ჯერ ხდება ფუნქციების შექმნა შემდეგ var ცვლადების დეკლარაცია ცოლო ამის შემდეგ სხვა ყველაფერი ეშვება ზევიდან ქვევით თანმიმდევრობით


// timers functions - setTimeout() and set Interval()

// setTimeout - რამდენ ხანში გაეშვასნ ფუნქცია
// მილიწამებში ვწერთ
// setTimeout(greet, 3000) //3 წამის მერე გამოიტანს 
// function greet() {
//     console.log("hello world")
// }

// //setinterval - callback ფუნქციას გამოიძახებს გარკვეული დროის ინტერვალით
// let count = 0
// function counter() {
//     count++;
//     console.log(count)

//     if (count >= 10) {
//         clearInterval(couterInterval)   
//     } // გაჩერდება 10 ზე
// }

// function greet() {
//     console.log("hello world")
// }
// const couterInterval = setInterval(greet, 2000, "gio") // ყოველ ორ წამში ერთხელ გაეშვება
// let welcome = false
// const greettimer = setTimeout(greet, 5000, "gio")

// function greet (username){
//     if (!welcome) {
//         console.log(`hello ${username}`)
//         clearInterval(greettimer)
//     }
// }


//default refresh
// const form =document.querySelector("form")
// const usernamefield = form.elements.username;
// const emailfield = form.elements.email;
// const phonefield = form.elements.phone;
// const datatable = document.querySelector("tbody")
// const sentbtn = document.getElementById("sendbtn")
// function handleSubmit(eventObject) {
//     eventObject.preventDefault()
//     const username = usernamefield.value
//     const email = emailfield.value
//     const phone = phonefield.value
//     form.reset()
//     const account = {
//         username:username,
//         email:email,
//         phone:phone,
//     }
//     presentation(account)

// }
// function presentation(account) {
//     datatable.innerHTML += `
//         <tr>
//             <td>${account.username}</td>
//             <td>${account.email}</td>
//             <td>${account.phone}</td>
//         </tr>
//     `;
// }

// form.onsubmit = handleSubmit

// let btn = document.querySelector("button")

// function wrapper() {
//     setTimeout(welcome, 2000)
// }

// function welcome() {
//     alert("bla bla ")
// }
// btn.onclick = wrapper
const box = document.getElementById("child")
let positionX = 0
let positionY = 0
let direction = "right"

function animate() {
    if (direction === "right"){
        positionX++;
        if (positionX >= 150) {
            direction = "bottom"
        }
    }
    if (direction === "bottom"){
        positionY++
        if (positionY >= 150) {
            direction = "left"
        }
    }
    if (direction === "left") {
        positionX--;
        if (positionX <= 0) {
            direction = "top"
        }
    }
    if (direction === "top") {
        positionY--;
        if(positionY <= 0) {
            direction = "right"
        }
    }

    box.style.left = `${positionX}px`
    box.style.top = `${positionY}px`
    box.style.rigth = `${positionX}px`
    box.style.bottom = `${positionY}px`

}
setInterval(animate, 10)