// 5) შექმენით მასივი ["HTML", "CSS", "JavaScript", "React"]. JSX-ში map() გამოყენებით დაარენდერეთ <li> ელემენტები <ul>-ის შიგნით. კომენტარებში ახსენით რატომ ვიყენებთ map()-ს სიების გამოსატანად React-ში

import React from "react";

export default function app() {
    const languages = ["HTML", "CSS", "JavaScript", "React"]
    return (
    <ul>
        {languages.map((language, index) => (
            <li key={index}>{language}</li>
        ))}
        </ul>
    );
}