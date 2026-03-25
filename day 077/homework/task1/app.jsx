// 2) React კომპონენტში შექმენით რიცხვითი ცვლადი age. JSX-ს გარეთ დაწერეთ if პირობა, რომელიც ამოწმებს: თუ age >= 18, ცვლადში result ჩაწერეთ "Adult", სხვა შემთხვევაში "Minor". JSX-ში გამოიტანეთ result. კომენტარებში ახსენით რატომ არ შეიძლება if-ის პირდაპირ გამოყენება JSX-ში
import React from "react";
export default function Age() {
    const age = 15
    let result;
    if (age >= 18) {
        result = "Adult"
    } else {
        result = "Minor"
    }
    return (
    <div>
        <h1>{result}</h1>
        </div>
    );
}