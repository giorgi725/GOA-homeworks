import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import BuggyOne from "./BuggyOne";
import BuggyTwo from "./BuggyTwo";

function App() {
    return (
        <div>
        <ErrorBoundary message="Component 1 failed">
            <BuggyOne />
        </ErrorBoundary>

        <ErrorBoundary message="Component 2 failed">
            <BuggyTwo />
        </ErrorBoundary>
        </div>
    );
}

export default App;