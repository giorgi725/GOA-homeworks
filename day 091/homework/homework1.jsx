// 2) შექმენით 2 context-ი:
// - MyContext
// - OtherContext
// კომენტარებში დაწერეთ:
// - როდის შეიძლება დაგჭირდეს ერთი context-ის შიგნით სხვა context-ის ჩასმა
// - რა პლიუსი აქვს wrapper Provider-ს

import React, { createContext, useState } from "react";

export const MyContext = createContext();
export const OtherContext = createContext();

export default function App() {
    const [user, setUser] = useState("Giorgi");
    const [theme, setTheme] = useState("dark");

    return (
        <MyContext.Provider value={{ user, setUser }}>
        <OtherContext.Provider value={{ theme, setTheme }}>
            <Child />
        </OtherContext.Provider>
        </MyContext.Provider>
    );
}

function Child() {
    return <h1>Context Example</h1>;
}

/*
როდის შეიძლება დაგჭირდეს ერთი context-ის შიგნით სხვა context-ის ჩასმა?
- როცა სხვადასხვა ტიპის მონაცემები გაქვს 
- როცა გინდა რომ ორივე მონაცემი ერთდროულად იყოს ხელმისაწვდომი ქვედა კომპონენტებში
- მაგ: AuthContext + ThemeContext ერთად გამოყენება

რა პლიუსი აქვს wrapper Provider-ს?
- კოდის ორგანიზება უფრო მარტივია
- შეგიძლია ერთ ადგილას გააერთიანო ყველა context
- თავიდან იცილებ ზედმეტ props drilling-ს
- reusable ხდება (შეგიძლია სხვა ფაილშიც გამოიყენო იგივე wrapper)
*/