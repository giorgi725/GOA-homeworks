// 6) შექმენით Profile კომპონენტი, რომელიც მიიღებს props-ით username მნიშვნელობას და გამოიტანს ტექსტს: "Welcome, username". App.jsx-ში გამოიყენეთ Profile კომპონენტი და გადაეცით თქვენი სახელი
import Profile from "./profile"
export default function app() {
    return <Profile username="giorgi" />
}