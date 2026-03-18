// 11) შექმენით components ფოლდერი  
// შექმენით 4 კომპონენტი:  
// Header.jsx, Card.jsx, Info.jsx, Footer.jsx  
// ყველა კომპონენტი სწორად დააექსპორტეთ

// 12) App.jsx-ში გამოიძახეთ კომპონენტები  
// იმპორტი გაუკეთეთ Header, Card, Info, Footer  
// დააბრუნეთ ისინი JSX-ში თანმიმდევრობით  
// გამოიყენეთ Fragment <> </>
import Greeting from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import Info from "./info";

export default function app() {
    return (
        <>
            <Greeting />
            <Info />
            <Card />
            <Footer />
        </>
    )
}