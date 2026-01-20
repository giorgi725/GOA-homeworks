const btn = document.getElementById("passBtn")
const par = document.getElementById("passOut")

function getPassword(){
    const pass = prompt("Enter your password")
    par.textContent = pass
}
btn.addEventListener('click', getPassword)