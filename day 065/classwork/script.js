// setitem - ელემენტის ჩამატება
// getitem - ელემნტის წაშლა
// removeitem - ელემენტის წაშლა

// const form =document.querySelector("form")

// const accounts = []

// const userfield = form.elements.username;
// const emailfield = form.elements.email;
// const passfield = form.elements.password;

// let loggeduser = ""

// function loaddata () {
//     let saveduser = localStorage.getItem("Username")
//     if (saveduser) {
//         loggeduser = saveduser
//     }
// }
// loaddata()
// checkloggedin()

// function savedata(user,email, pass) {
//     localStorage.setItem("Username",user)
//     localStorage.setItem("email",email)
//     localStorage.setItem("password",pass)
// }

// function logout() {
//     localStorage.removeItem("Username")
// }

// function checkloggedin() {
//     if (loggeduser) {
//         document.body.innerHTML = `
//         <h2>Username: ${loggeduser}</h2>
//         <h2>email: ${localStorage.getItem("email")}</h2>
//         <h2>password: ${localStorage.getItem("password")}</h2>
//         <button onclick="${logout()}">logout</button>
//         `
//     }
// }

// function handlesubmit(e) {
//     e.preventDefault()
//     let username = userfield.value
//     let email = emailfield.value
//     let password = passfield.value

//     if (username.length <= 8) {
//         alert("Username must be 8 characters")
//         return
//     }
//     if (username.includes(" ")){
//         alert("must not contain space")
//         return 
//     }
//     if (password.length < 8) {
//         alert("password must be 8 characters long")
//         return
//     }

//     for (let i = 0; i <accounts.length; i++) {
//         if (email === accounts[i].email) {
//             alert("account with this email already exists")
//             return
//         }
//     }
//     loggeduser = username
//     savedata(username, email, password)
//     alert("account created succesfully")
//     checkloggedin()

// }

// form.addEventListener('submit', handlesubmit)

// function loadstorage(accounts) {


//JSON - javascript object notation
//     let savesdata = localStorage.getItem("Accounts")
//     accounts = savesdata
// }
// loadinfo(accounts)

// function updatestorage(accounts, account) {
//     localStorage.setItem("Accounts", accounts)
//     loadstorage.setItem("account" ,account)
// }


let username = "gio"
console.log("hello my name is " + username + " .hitler almost win")
console.log(`hello my name is ${username}. hitler almost win`)


const religions = ["Christianity", "Islam", "Buddism", "Pagan", "Hindi", "Judaism"]

for (let i = 0; i < religions.length; i++) {
    console.log(religions[i])
}
// for ციკლის iterator  რეზერვირებული სიტყვები
// of - პირდაპირ სიის ელემენტს წვდები
// in - გვაძლევს სიის ყველა ინდექს
for (let x of religions) {
    console.log(x)
}
for (let index in religions) {
    console.log(x)
}

//var yvelganaa xelmisawvdomi
if (true) {
    var user = "gio"
}
console.log(user)


//marto im kodis bloki
if (true) {
    let user = "gio"
}
console.log(user)