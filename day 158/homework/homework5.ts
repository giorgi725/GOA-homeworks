// 6) შექმენით Tuple, Array, Rest Parameter და Enum-ის გამოყენებით პატარა TypeScript მაგალითი. შექმენით Product Tuple, Product-ების Array, Category Enum და ფუნქცია, რომელიც Rest Parameter-ის საშუალებით მიიღებს რამდენიმე Product-ს. ყველა ცვლადსა და ფუნქციას სწორად მიუთითეთ Type

enum Category {
    Food,
    Electronics,
    Clothes
}

type Product = [string, number, Category]

let products: Product[] = [
    ["Apple", 2, Category.Food],
    ["Phone", 1000, Category.Electronics],
    ["T-Shirt", 50, Category.Clothes]
]

function showProducts(...products: Product[]): Product[] {
    return products
}