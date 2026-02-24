// 8) შექმენით saveUser ფუნქცია ამ სინტაქსით: const saveUser = () => { ... } რომელიც input-დან აიღებს მომხმარებლის სახელს და შეინახავს localStorage-ში setItem-ით. შექმენით loadUser = () => { ... } რომელიც ამოიღებს შენახულ მნიშვნელობას და DOM-ში გამოიტანს h2-ში. კომენტარებით ახსენით რატომაა arrow function მოსახერხებელი მცირე და ერთხელ გამოსაყენებელ ფუნქციებში

const saveUser = () => {
        const input = document.getElementById("username");
        const name = input.value;
        localStorage.setItem("userName", name);
        console.log("User saved:", name);
    }
    const loadUser = () => {
        const savedName = localStorage.getItem("userName"); 
        const display = document.getElementById("displayName");
        display.textContent = savedName ? savedName : "No user saved"; 
    }
    document.getElementById("saveBtn").addEventListener("click", saveUser);
    document.getElementById("loadBtn").addEventListener("click", loadUser);