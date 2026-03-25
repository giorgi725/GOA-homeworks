// 4) შექმენით მასივი [1, 2, 3, 4, 5]. JSX-ში map() გამოყენებით დააბრუნეთ <li> ელემენტები, სადაც ლუწი რიცხვები გაორმაგებულია, ხოლო კენტები უცვლელი. კომენტარებში ახსენით map()-ის როლი JSX-ში

export default function app() {
    const nums = [1,2,3,4,5]
    return (
        <ul>
        {nums.map((num, index) => (
            <li key={index}>
            {num % 2 === 0 ? num * 2 : num}
            </li>
        ))}
        </ul>
    );
}