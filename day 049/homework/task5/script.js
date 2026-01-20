const btn = document.getElementById("cityBtn")
const par = document.getElementById("cityOut")

function getCity(){
    const city = prompt("Enter your city")
    par.textContent = city
}

btn.addEventListener('click', getCity)