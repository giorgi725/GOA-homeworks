// 5) შექმენით ობიექტების მასივი {id, name}. JSX-ში map() გამოყენებით გამოიტანეთ სია. თითოეულ ელემენტს აუცილებლად დაამატეთ key. კომენტარებში ახსენით რატომ არის key აუცილებელი React-ში

export default function UserList() {
    const users = [
        { id: 17, name: "giorgi" },
        { id: 24, name: "zura" },
        { id: 35, name: "nika" }
    ];
    return (
        <ul>
        {users.map((user) => (
            <li key={user.id}>
            {user.name}
            </li>
        ))}
        </ul>
    );
}
