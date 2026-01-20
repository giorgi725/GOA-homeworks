const btn = document.getElementById("calcBtn")
const par = document.getElementById("calcOut")

function calculateSum() {
    const num1 = Number(prompt("Enter number one"))
    const num2 = Number(prompt("Enter number two"))
    par.textContent = num1 + num2
}

btn.addEventListener("click", calculateSum)