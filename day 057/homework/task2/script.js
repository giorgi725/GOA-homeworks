const username  = document.getElementById("name");
const email  = document.getElementById("email");
const password  = document.getElementById("pass1");
const confirmPassword = document.getElementById("pass2")
const button  = document.getElementById("btn");

function form(){
    const emailV = email.value;
    const passwordV = password.value;
    const confirmPass = confirmPassword.value;
    
    if(!username.value || !emailV || !passwordV || !confirmPass){
        alert("შეავსეთ ყველა ფორმა")
    } else if (passwordV.length < 8) {
        alert("შემოიყვანეთ უფრო დიდი პაროლი")
    } else if (passwordV != confirmPass) {
        alert("პაროლები არ ემთხვევა")
    } else if (!emailV.includes("@") || !emailV.includes(".")) {
        alert("ემაილი არ შეიცავს @ და .-ს")
    } else {
        alert(`რეგისტრაცია წარმატებით დასრულდა ${username.value}`)
    }
    
}
button.addEventListener("click", form)