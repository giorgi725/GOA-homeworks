import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./BuggyComponent";
import ErrorFallback from "./ErrorFallback";

export default function App() {
    const [resetKey, setResetKey] = useState(0);

    return (
        <div>
        <h1>react-error-boundary Test</h1>

        <button onClick={() => setResetKey(prev => prev + 1)}>
            Change resetKey
        </button>

        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
            console.log("Reset მოხდა");
            }}
            resetKeys={[resetKey]}
        >
            <BuggyComponent trigger={resetKey} />
        </ErrorBoundary>
        </div>
    );
}

// რა პლიუსი აქვს library-ს custom ErrorBoundary-სთან შედარებით?

// - ნაკლები კოდი
// - აქვს built-in reset მექანიზმი
// - აქვს resetKeys

// როდის ჯობია production-ში library გამოყენება?

// - როცა გჭირდება სტაბილური და ტესტირებული გადაწყვეტა
// - როცა არ გინდა საკუთარი ErrorBoundary-ს maintenance
// - როცა იყენებ დიდი პროექტში 