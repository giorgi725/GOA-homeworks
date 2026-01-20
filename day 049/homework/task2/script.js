const inp = document.getElementById("userInput")
const btn = document.getElementById("showBtn")
const par = document.getElementById("display")

function displayText(){
    const name = inp.value
    par.textContent = name
}

btn.addEventListener('click', displayText)