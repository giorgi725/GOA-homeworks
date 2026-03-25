// 11) შექმენით მასივი [10, 20, 30]. JSX-ში map() გამოყენებით დააბრუნეთ ტექსტი ფორმატში "Index: X, Value: Y" თითოეული ელემენტისთვის

export default function app() {
    const nums = [10, 20 ,30]
    return (
    <div>
        {numbers.map((num, index) => (
            <p key={index}>
            Index: {index}, Value: {num}
            </p>
        ))}
        </div>
    );
}