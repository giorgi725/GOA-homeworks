// 9) შექმენით ვებგვერდი, რომელზეც გექნებათ 1 ღილაკი. ღილაკზე დაჭერისას უნდა შეიქმნას ახალი პარაგრაფი, რომელიც შეიცავს შემთხვევით რიცხვს 0-იდან 1000-მდე დიაპაზონში. პარაგრაფი ყოველ დაჭერაზე უნდა დაემატოს body თეგში. გამოიყენეთ createElement, textContent და appendChild მეთოდები. კომენტარებით ახსენით Math.random და Math.floor ფუნქციების დანიშნულება

const button = document.getElementById("btn");

        button.addEventListener("click", function() {
            const p = document.createElement("p");

            const randomNumber = Math.floor(Math.random() * 1001);
            p.textContent = "Random Number: " + randomNumber;

            document.body.appendChild(p);
        });