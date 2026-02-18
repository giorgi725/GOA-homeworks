// 4) შექმენით ფორმა, სადაც მომხმარებელი შეიყვანს სრულ სახელს, ელფოსტას და ტელეფონის ნომერს. ფორმის გაგზავნისას ეს ინფორმაცია დაემატოს ქვემოთ არსებულ ცხრილში ახალ რიგად. გამოიყენეთ JavaScript-ში შექმნილი container და presentational ფუნქციები, რომლებსაც ექნებათ განსხვავებული დანიშნულება, container ფუნქცია მოამზადებს მონაცემებს და შექმნის tr ელემენტს, ხოლო presentational ფუნქცია დაამატებს მას ცხრილში. კომენტარებით ახსენით თითოეული ფუნქციის როლი

const form = document.getElementById("userForm");
const tableBody = document.getElementById("tableBody");

    function createRow(fullName, email, phone) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${fullName}</td>
        <td>${email}</td>
        <td>${phone}</td>
    `;
    return tr;
    }
    function addRowToTable(row) {
        tableBody.appendChild(row);
}
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let newRow = createRow(fullName, email, phone);
    addRowToTable(newRow);
    form.reset();
    });