// let btn =document.getElementById("b")

// function greeting(){
//     alert("Hello Javascript!")
//     btn.textContent = 'change color'
//     btn.style.backgroundColor = "red"
// }

// greeting()

// function person(){
//     username: "giorgi"
//     age :17
//     city : "tbilisi"
// }

// function welcome(name) {
//     alert("Welcome " + name);
// }
// welcome(giorgi)


// btn.onclick = function(){
//         console.log("button clicked");
// }
// btn.onclick = greeting

// function add (num1,num2){
//     return num1 + num2;
// }
// add(3,4)

let btn = document.getElementById("sendbtn")
let userField = document.getElementById("username")

// btn.onclick = function() {
//     console.log(userField.value)
// }

let welcomeheader = document.getElementById("welcome")

btn.onclick = function() {
    welcomeheader.textContent = "hello " + userField.value;
    userField.value = " "
}