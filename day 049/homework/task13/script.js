const btn = document.getElementById("greetBtn")

const teacher = {
    name: "ANA",
    subject: "math",
    experience: 3,
    greet(){
        alert("Hello, I teach math")
    }
}
btn.addEventListener('click', teacher.greet)