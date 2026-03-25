// 3) მოცემული კოდის მიხედვით შექმენით ფუნქციური კომპონენტი info, რომელიც აბრუნებს <p> ტექსტით "Hello React". შემდეგ გამოიყენეთ ReactDOM.createRoot და root.render ისე, რომ ეკრანზე გამოჩნდეს info კომპონენტი info() გამოძახებით. კომენტარებში ახსენით რას აკეთებს createRoot და render

import React from "react";
import ReactDOM from "react-dom/client";

function Info() {
    return <p>Hello React</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Info());