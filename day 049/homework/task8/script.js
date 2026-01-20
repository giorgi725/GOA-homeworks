const inp = document.getElementById("wordInput")
const btn = document.getElementById("lengthBtn")
const par = document.getElementById("wordOut")

function checkLength(){
    const word = inp.value
    par.textContent = word.length
}
btn.addEventListener('click', checkLength)