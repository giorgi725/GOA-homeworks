// 2) შექმენით Greeting კომპონენტი, რომელიც გამოიტანს <h1> ელემენტში props-ით მიღებულ ტექსტს. App.jsx-ში გამოიყენეთ Greeting კომპონენტი და გადაეცით მას ტექსტი "Hello React". კომენტარებით ახსენით რას აკეთებს props

export default function Greeting(props) {
    return <h1>{props.text}</h1>
}