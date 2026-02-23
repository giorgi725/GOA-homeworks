// 6) შექმენით input ველი და ღილაკი “ძებნა”. გვერდზე გქონდეთ წინასწარ ჩამონათვალი (ul ელემენტში რამდენიმე li ტექსტით). როდესაც მომხმარებელი შეიყვანს სიტყვას და დააჭერს ღილაკს, მხოლოდ ის ელემენტები უნდა დარჩეს ხილული, რომლებიც შეიცავენ შეყვანილ ტექსტს, დანარჩენი უნდა დაიმალოს (display: none). გამოიყენეთ for ციკლი თითოეული li ელემენტის შესამოწმებლად და კომენტარებით ახსენით როგორ ხდება ტექსტის შედარება და ელემენტის დამალვა ან ჩვენება
const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const listItems = document.querySelectorAll("#itemList li");

button.addEventListener("click", function() {
    const searchValue = input.value.toLowerCase();
    for (let i = 0; i < listItems.length; i++) {
        const itemText = listItems[i].textContent.toLowerCase();
        if (itemText.includes(searchValue)) {
            listItems[i].style.display = "list-item";
        } else {
            listItems[i].style.display = "none";
        }
    }
});