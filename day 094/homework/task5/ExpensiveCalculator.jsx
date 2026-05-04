import { useState, useMemo } from "react";

export default function ExpensiveCalculator() {
    const [counter, setCounter] = useState(0);
    const [inputNumber, setInputNumber] = useState(1);
    const [result, setResult] = useState(0);

    function expensiveCalculation(num) {
        console.log("expensive calculation...");

        for (let i = 0; i < 100000000; i++) {
        }

        return num * num;
    }

    const cachedValue = useMemo(() => {
        return expensiveCalculation(inputNumber);
    }, [inputNumber]);

    return (
        <div>
        <h2>Expensive Calculator</h2>

        <input
            type="number"
            value={inputNumber}
            onChange={(e) => setInputNumber(Number(e.target.value))}
        />

        <button onClick={() => setCounter(counter + 1)}>
            Increase Counter
        </button>

        <button onClick={() => setResult(cachedValue)}>
            Calculate
        </button>

        <hr />

        <p>Counter: {counter}</p>
        <p>Input number: {inputNumber}</p>
        <p> Cached value: {cachedValue}</p>
        <p>Final result: {result}</p>
        </div>
    );
}