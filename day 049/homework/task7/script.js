const btn = document.getElementById("compBtn")
const par = document.getElementById("compOut")

function compareNumbers(){
    const num1 = prompt("Enter number one")
    const num2 = prompt("Enter number two")
    if (num1 > num2){
        par.textContent = num1
    } else if (num1 < num2){
        par.textContent = num2
    } else {
        par.textContent = "They are equal"
    }
}

btn.addEventListener('click', compareNumbers)