// 5) შექმენით Card კომპონენტი, რომელიც მიიღებს props-ით title და description. კომპონენტში გამოიტანეთ title <h2>-ში და description <p>-ში. App.jsx-ში გამოიყენეთ Card კომპონენტი და გადაეცით ნებისმიერი მნიშვნელობები

import Card from "./card";

export default function app() {
    return (
        <Card title="smth" desc="this book is very good" />
    )
}