// 10) შექმენით ორი კომპონენტი და გამოიტანეთ ისინი App.jsx-ში Fragment-ის (<></>) გამოყენებით. კომენტარებში ახსენით რა არის Fragment და რატომ ვიყენებთ

import First from "./first"
import Second from "./second"

export default function app() {
    return (
        <>
            <First />
            <Second />
        </>
    )
}