// 4) შექმენით App კომპონენტი, სადაც state-ში იქნება ტექსტი.
//    შექმენით Input კომპონენტი, რომელსაც props-ით გადასცემთ:
//    - value
//    - onChange ფუნქციას
//    input-ში ჩაწერილი ტექსტი უნდა აისახოს ეკრანზე პარაგრაფში.

import { useState } from "react";
import Input from "./Input";

export default function App() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    return (
        <div>
        <Input 
            value={text}
            onChange={handleChange}
        />
        <p>Text: {text}</p>
        </div>
    );
}