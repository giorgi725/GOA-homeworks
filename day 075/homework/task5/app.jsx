// 6) React-ის კომპონენტში შექმენით boolean ცვლადი. ternary ოპერატორის გამოყენებით თუ პირობა true არის გამოიტანეთ <p> ტექსტით "Welcome back", ხოლო თუ false არის გამოიტანეთ <p> ტექსტით "Please log in". კომენტარებში ახსენით ternary ოპერატორის სინტაქსი

export default function app() {
    const isActive = true
    return <p>{isActive ? "Welcome back" : "Please log in"}</p>
}