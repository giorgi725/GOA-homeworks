// 4) შექმენით getProducts ფუნქცია, რომელიც async ტიპის იქნება. await-ის გამოყენებით წამოიღეთ პროდუქტის სია https://fakestoreapi.com/products API-დან. მიღებული მასივიდან თითოეული პროდუქტი გამოიტანეთ DOM-ში ცალკე დივად: სათაური, კატეგორია და სურათი. კომენტარებით ახსენით თქვენი სიტყვებით async და await რას აკეთებს

// async ნიშნავს, რომ ეს ფუნქცია ასინქრონულია
// ანუ შიგნით შეგვიძლია გამოვიყენოთ await
// და ფუნქცია ყოველთვის დააბრუნებს Promise-ს

async function getProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        const container = document.getElementById("products");
        products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        const title = document.createElement("h3");
        title.textContent = product.title;
        const category = document.createElement("p");
        category.textContent = "Category: " + product.category;
        const img = document.createElement("img");
        img.src = product.image;
        div.appendChild(title);
        div.appendChild(category);
        div.appendChild(img);
        container.appendChild(div);
        });
    } catch (error) {
        console.log("შეცდომა:", error);
    }
}
getProducts();