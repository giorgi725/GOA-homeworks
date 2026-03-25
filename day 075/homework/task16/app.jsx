// 17) React კომპონენტში შექმენით boolean ცვლადი isAdmin. ternary ოპერატორის გამოყენებით JSX-ში თუ isAdmin არის true გამოიტანეთ <p> ტექსტით "Admin panel", ხოლო თუ false — <p> ტექსტით "User panel". კომენტარებში ახსენით ternary ოპერატორის სტრუქტურა

export default function app() {
    const isAdmin = true
    return <p>{isAdmin ? "Admin panel" : "user panel"}</p>
}
//ternary-ის სტრუქტურა
// ამოწმებს isAdmin ს თუ trueა გამოაქ "Admin panel" თუ false "user panel" 
