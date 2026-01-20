const inp = document.getElementById("ageInput")
const btn = document.getElementById("ageBtn")
const par = document.getElementById("ageOut")

function showAge(){
    const age = inp.value
    par.textContent = age
}
btn.addEventListener('click', showAge)