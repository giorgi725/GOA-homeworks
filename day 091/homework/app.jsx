import React, { useState } from "react";
import { MyContext } from "./homework1";
import NestedProvider from "./NestedProvider";
import Child from "./Child";

export default function App() {
    const [user, setUser] = useState("Giorgi");

    return (
        <MyContext.Provider value={{ user, setUser }}>
        <NestedProvider>
            <Child />
        </NestedProvider>
        </MyContext.Provider>
    );
}

/*
როგორ იღებს Child მონაცემებს ორივე context–დან props drilling–ის გარეშე?

- Child კომპონენტი არის ორივე Provider-ის შიგნით (MyContext და OtherContext)
- useContext-ის გამოყენებით შეუძლია პირდაპირ წვდომა ორივე context-ზე
მაგ: useContext(MyContext) და useContext(OtherContext)

- არ გვჭირდება მონაცემების გადაცემა შუა კომპონენტებში (props drilling)
- Context API მუშაობს როგორც "global store" Provider-ის შიგნით */
