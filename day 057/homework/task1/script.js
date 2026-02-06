const username  = document.getElementById("name");
const email  = document.getElementById("email");
const password  = document.getElementById("pass");
const button  = document.getElementById("btn");

function check() {
    if (!username.value || !email.value || !password.value){
        alert("შეიყვანეთ სრული ინფორმაცია")
    } else {
        alert("ინფორმაცია შენახულია")
    }
}

button.addEventListener("click", check)