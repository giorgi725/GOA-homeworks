const inp = document.getElementById("numInput")
const btn = document.getElementById("doubleBtn")
const par = document.getElementById("numOut")

function doubleNumber(){
    const num = inp.value
    par.textContent = num*2
}
btn.addEventListener('click', doubleNumber)