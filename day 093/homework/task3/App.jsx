import React, { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import BuggyComponent from "./BuggyComponent";
import ErrorFallback from "./ErrorFallback";

function App() {
    const [crash, setCrash] = useState(false);

    return (
        <div>
        <button onClick={() => setCrash(true)}>Crash</button>
        <button onClick={() => setCrash(false)}>Reset trigger</button>

        <ErrorBoundary
            FallbackComponent={ErrorFallback}
            onReset={() => {
            console.log("Reset");
            setCrash(false);
            }}
            resetKeys={[crash]}
        >
            <BuggyComponent trigger={crash} />
        </ErrorBoundary>
        </div>
    );
}

export default App;