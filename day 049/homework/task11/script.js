const btn = document.getElementById("bgBtn")
const div = document.getElementById("box")

function changeBackground(){
    div.style.backgroundColor = "yellow"
}
btn.addEventListener('click', changeBackground)