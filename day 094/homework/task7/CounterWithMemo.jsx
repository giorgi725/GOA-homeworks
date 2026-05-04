import { useState, useMemo } from "react";
import Message from "./Message";

export default function CounterWithMemo() {
    const [count, setCount] = useState(1);
    const [message, setMessage] = useState("Hello!");

    function calculateFactorial(number) {
        console.log("Calculating factorial...");
        let result = 1;
        for (let i = 1; i <= number; i++) {
        result *= i;
        }
        return result;
    }

    const factorial = useMemo(() => {
        return calculateFactorial(count);
    }, [count]);

    return (
        <div>
        <h2>Counter With Memo</h2>
        <p>Counter: {count}</p>
        <p>Factorial: {factorial}</p>
        <Message message={message} />
        <br />

        <button onClick={() => setCount(count + 1)}>
            Increase
        </button>

        <button onClick={() => setMessage("New Message 🚀")}>
            Change Message
        </button>
        </div>
    );
}