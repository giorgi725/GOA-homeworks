// 3) შექმენით App კომპონენტი, სადაც გექნებათ state-ში რიცხვი (count).
//    შექმენით ცალკე Button კომპონენტი, რომელსაც props-ით გადასცემთ:
//    - ტექსტს (label)
//    - ფუნქციას (onClick)
//    ღილაკზე დაკლიკებისას უნდა იზრდებოდეს რიცხვი და შედეგი გამოჩნდეს პარაგრაფში.

import { useState } from "react";
import Button from "./btn";

export default function App() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
        <p>Count: {count}</p>
        <Button 
            label="Increase"
            onClick={handleClick}
        />
        </div>
    );
}