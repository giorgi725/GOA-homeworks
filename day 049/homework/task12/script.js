const inp = document.getElementById("yearInput")
const btn = document.getElementById("yearBtn")
const par = document.getElementById("ageMsg")

function checkBirthYear() {
    const age = inp.value
    if (age < 18){
        par.textContent = "Minor"
    } else{
        par.textContent = "adult"
    }
}

btn.addEventListener('click', checkBirthYear)