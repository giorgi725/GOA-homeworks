// 6) შექმენით Profile კომპონენტი, რომელიც მიიღებს props-ით username მნიშვნელობას და გამოიტანს ტექსტს: "Welcome, username". App.jsx-ში გამოიყენეთ Profile კომპონენტი და გადაეცით თქვენი სახელი

export default function Profile(props) {
    return <h1>Welcome, {props.username}</h1>
}