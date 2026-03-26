// 7) შექმენით Product კომპონენტი, რომელიც მიიღებს props-ით productName და price მნიშვნელობებს. კომპონენტში გამოიტანეთ ორივე <p> ელემენტში. კომენტარებით ახსენით რატომ ვიყენებთ props-ს კომპონენტებს შორის მონაცემების გადასაცემად

export default function Product(props) {
    return (
        <p>product name is {props.productName} and price is {props.price}$</p>
    )
}