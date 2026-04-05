// 2) თქვენი სიტყვებით ახსენით რა არის useEffect hook. დაწერეთ როდის იძახება იგი კომპონენტში და რა განსხვავებაა useEffect-ის გარეშე და useEffect-ით შესრულებულ ლოგიკას შორის

// useEffect არის React-ის კაუჭა, რომელიც გამოიყენება გვერდითი ეფექტების (side effects) სამართავად ფუნქციურ კომპონენტებში.
// useEffect გაძლევს საშუალებას გააკეთო ისეთი მოქმედებები, როგორიცაა: API-დან მონაცემების წამოღება, event listener-ების დამატება
// useEffect-ის გარეშე თუ შენ პირდაპირ კომპონენტის body-ში დაწერ ლოგიკას: console.log("hello"); ეს გაეშვება ყოველ render-ზე, რაც შეიძლება იყოს არასასურველი
// useEffect-ით useEffect(() => {console.log("hello") }, []); ეს გაეშვება მხოლოდ ერთხელ, როცა კომპონენტი პირველად ჩაიტვირთება

// 3) შექმენით BackgroundColor კომპონენტი. გამოიყენეთ useState და useEffect. შექმენით მდგომარეობა სახელად color საწყისი მნიშვნელობით "white". შექმენით რამდენიმე ღილაკი (Red, Green, Blue, Pink). useEffect-ის გამოყენებით შეცვალეთ document.body-ის backgroundColor ყოველ ჯერზე, როდესაც color მდგომარეობა შეიცვლება. კომენტარებით ახსენით რატომ არის ეს გვერდითი ეფექტი

import React, { useState, useEffect } from "react";

export default function BackgroundColor() {
    const [color, setColor] = useState("white");
    useEffect(() => {
        document.body.style.backgroundColor = color;
        return () => {
        document.body.style.backgroundColor = "white";
        };
    }, [color]);

    return (
        <div>
            <h2>აირჩიე ფერი</h2>
            <button onClick={() => setColor("red")}>Red</button>
            <button onClick={() => setColor("green")}>Green</button>
            <button onClick={() => setColor("blue")}>Blue</button>
            <button onClick={() => setColor("pink")}>Pink</button>
        </div>
    );
}

// 4) შექმენით CounterAlert კომპონენტი. შექმენით count მდგომარეობა. ღილაკზე დაჭერისას გაზარდეთ count 1-ით. useEffect-ის დახმარებით გამოიტანეთ alert ტექსტით "Lucky number", როდესაც count გაუტოლდება 7-ს. კომენტარებში ახსენით რატომ უნდა იყოს ეს ლოგიკა useEffect-ში

export default function CounterAlert() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if (count === 7) {
        alert("Lucky number");
        }
    }, [count]); 
    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    );
}

// 5) შექმენით WindowResize კომპონენტი. გამოიყენეთ useState და useEffect ეკრანის სიგანის (window.innerWidth) შესანახად. დაამატეთ resize eventListener useEffect-ში და cleanup function-ის გამოყენებით წაშალეთ იგი. კომენტარებით ახსენით როდის იძახება cleanup function

export default function WindowResize() {
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
        setWidth(window.innerWidth);
        };
        return () => {
        window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div>
        <h2>ეკრანის სიგანე: {width}px</h2>
        </div>
    );
}

// 6) შექმენით RandomDog კომპონენტი. კომპონენტის ჩატვირთვისას useEffect-ის გამოყენებით წამოიღეთ შემთხვევითი ძაღლის სურათი API-დან და გამოიტანეთ <img> ელემენტში
// https://dog.ceo/api/breeds/image/random
export default function RandomDog() {
    const [dogImage, setDogImage] = useState("");
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
            setDogImage(data.message);
        })
        .catch((error) => {
            console.error(`error: ${error}`);
        });
    }, []);
    return (
        <div>
            <h2>Random Dog</h2>
            {dogImage ? (
                <img src={dogImage} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}


// 7) შექმენით CountryInfo კომპონენტი. გამოიყენეთ useState და useEffect. შექმენით input ველი, სადაც მომხმარებელი ჩაწერს ქვეყნის კოდს (მაგ: ge, us, fr). useEffect-ის გამოყენებით წამოიღეთ ქვეყნის ინფორმაცია API-დან მხოლოდ მაშინ, როცა input-ის მნიშვნელობა შეიცვლება და გამოიტანეთ ქვეყნის სახელი და რეგიონი
// https://restcountries.com/v3.1/alpha/{code}

export default function CountryInfo() {
    const [code, setCode] = useState("");
    const [country, setCountry] = useState(null);
    useEffect(() => {
        if (!code) return;
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((res) => res.json())
        .then((data) => {
            setCountry(data[0]);
        })
        .catch(() => setCountry(null));
    }, [code]);
    return (
        <div>
        <input
            type="text"
            placeholder="Enter country code (e.g. ge, us)"
            value={code}
            onChange={(e) => setCode(e.target.value)}
        />
        {country && (
            <div>
            <h2>{country.name.common}</h2>
            <p>Region: {country.region}</p>
            </div>
        )}
        </div>
    );
}
