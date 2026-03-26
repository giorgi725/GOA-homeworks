// 5) შექმენით Card კომპონენტი, რომელიც მიიღებს props-ით title და description. კომპონენტში გამოიტანეთ title <h2>-ში და description <p>-ში. App.jsx-ში გამოიყენეთ Card კომპონენტი და გადაეცით ნებისმიერი მნიშვნელობები

export default function Card(props) {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </>
    )
}