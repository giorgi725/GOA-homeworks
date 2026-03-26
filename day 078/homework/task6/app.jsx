// 7) შექმენით Product კომპონენტი, რომელიც მიიღებს props-ით productName და price მნიშვნელობებს. კომპონენტში გამოიტანეთ ორივე <p> ელემენტში. კომენტარებით ახსენით რატომ ვიყენებთ props-ს კომპონენტებს შორის მონაცემების გადასაცემად

import Product from "./product";

export default function app() {
    return <Product productName="Apple" price={100} />
}