const btn = document.getElementById("nameBtn")
const par = document.getElementById("output")

function showName(){
    const name = prompt("Enter your name")
    par.textContent = name
}

btn.addEventListener('click', showName);