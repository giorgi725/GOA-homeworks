// 2) შექმენით ღილაკი, რომელზე დაჭერისას body ელემენტში დაემატოს ახალი პარაგრაფი, რომელიც შეიცავს შემთხვევით რიცხვს 0-დან 1000-მდე დიაპაზონში. გამოიყენეთ Math.random და Math.floor ფუნქციები შემთხვევითი მთელი რიცხვის მისაღებად და კომენტარებით ახსენით რას აკეთებს თითოეული მათგანი

const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    let Num = Math.floor(Math.random() * 1001);
    let p = document.createElement("p");
    p.textContent = "Random Number: " + Num;
    document.body.appendChild(p);
    });