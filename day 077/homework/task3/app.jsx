// 4) ReactDOM.createRoot-ის გამოყენებით შექმენით root. root.render-ში დაარენდერეთ <div>, რომლის შიგნით info კომპონენტი გამოიძახება სამჯერ ( {info()} ). კომენტარებში ახსენით რატომ შეგვიძლია კომპონენტის რამდენჯერმე გამოძახება


import React from "react";
import ReactDOM from "react-dom/client";

function Info() {
    return <p>Hello React</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        {Info()}
        {Info()}
        {Info()}
    </div>
);